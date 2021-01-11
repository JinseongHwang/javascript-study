const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');

// 1. App 생성
const app = express();

// 2. App 설정
// dotenv의 옵션을 가져온다.
dotenv.config();
// 포트를 app에 직접 설정 가능하다. 전역 변수 느낌으로
// 환경변수(process.env)에 PORT 값이 있으면 가져오고, 없으면 3000을 사용하겠다는 의미이다.
app.set('port', process.env.PORT || 3000);

// 3. 공통 Middleware
// morgan은 request와 response에 대한 정보를 알려준다.
// (대체로)'dev' 옵션은 개발 시에 사용하고, 'combined' 옵션 조금 더 자세하게 보여주기 때문에 배포 시에 사용한다.
app.use(morgan('dev'));

// 예를 들어, localhost:3000/foo.html 을 클라이언트가 요청했을 때 실제로는 currentDir/public/foo.html 에서 가져가도록 한다.
// 클라이언트가 서버 구조를 쉽게 알 수 없게 해서 보안 취약점을 보완한다.
// 파일 찾기 성공: 아래의 라우터로 이동하지 않는다. next()가 내부적으로 없다.
// 파일 찾기 실패: 만약 localhosr:3000/about이라면, 내부적으로 next()실행. 다음 라우터로 이동 -> 따라서 위치도 중요하다.
// 만약 로그인 한 사람에게만 파일에 접근 권한을 주려면 cookirParser와 session을 위로 올려도 상관없다.
// format: app.use('요청 경로', express.static(실제 경로));
/*
    app.use('/', express.static(__dirname, 'public'));
    -> 현재는 학습용이므로 public이 없다.
 */

// cookie-parser은 쿠키 데이터를 다루기 쉽게 만들어준다.
app.use(cookieParser(process.env.COOKIE_SECRET));

// 과거의 body-parser가 express안에 다음과 같이 포함되어졌다.
app.use(express.json()); // 클라이언트에서 json을 보내주면 req.body 안에서 접근 가능하게 만들어준다.
app.use(express.urlencoded({ extended: true })) // 클라이언트에서 form-submit한 내용을 파싱한다.
// extended true: qs, false: querystring -> qs를 사용할 수 있도록 true 값을 주는 것을 권장함.
// 하지만 form에서 이미지나 파일을 전송할 경우 urlencoded가 처리할 수 없기 때문에 multer를 사용한다.

// session 관리용 미들웨어
// req.session.* 으로 접근 가능하며, request를 보낸 각각의 클라이언트에게 고유한 session이 부여된다.
// 참고: https://dev-dain.tistory.com/68
app.use(session({
    resave: false, // request가 들어오면 수정사항이 없더라도 다시 저장 -> false
    saveUninitialized: true, // 세션에 저장 내역이 없더라도 처음부터 세션을 생성 -> true
    secret: process.env.COOKIE_SECRET, // 암호화에 사용되는 key (cookie-parser의 매개변수와 동일)
    cookie: { // 쿠키 설정
        httpOnly: true, // 쿠키가 웹브라우저와 통신할 때만 쿠키를 발행한다. 즉, js로 데이터 탈취가 불가능해진다.
        secure: false, // https로 통신할 때만 쿠키를 전송한다. 지금은 개발 단계이므로 false이고, 배포 시에는 true로 변경한다.
    },
    name: 'connect.sid', // Default: 세션의 Name
}));

app.use(multer().array());


// app.use 역시 첫 번째 매개변수에 경로를 적어주면 그 경로에서만 실행된다.
app.use((req, res, next) => {
    console.log('미들웨어가 실행되었습니다.');
    next();
}, ((req, res, next) => {
    try {
        // console.log('다음 미들웨어입니다.');
        next();
    } catch (error) {
        console.log('[ERROR] 에러 발생!');
        // next()에 인자가 없으면 다음으로 넘어가지만, 인자가 존재하면 에러 발생으로 간주한다.
        next(error);
    }
}));

// 4. 라우터
// app.METHOD(PATH)
// GET
app.get('/', (req, res, next) => {
    req.session.myName = 'jinseong'; // 세션 값 설정
    res.sendFile(path.join(__dirname, 'index.html'));
    // next('route')를 만나면 다음 미들웨어가 아닌
    // 다음 라우터부터 다시 살펴보며 만족하는 경로가 있는지 확인해서 들어간다.
    next('route');
}, (req, res) => {
    console.log('아마 여기는 안보일거야 ~~');
});

app.get('/', ((req, res) => {
    console.log('같은 경로 다른 라우터');
}));

app.get('/session/view', (req, res) => {
    if (req.session.myName) { // 세션 값 유무 확인
        // 세션 값 조회
        // 단, 실제로 쿠키에 값이 저장될 때는 secret값에 따라 암호화 되어서 저장됩니다.
        // 따라서 값이 's:'로 시작되지만, encodeURIComponent 함수가 실행되어 's%3A'로 시작합니다.
        res.send(`현재 세션에 저장된 myName 값은 "${req.session.myName}" 입니다.`);
    } else {
        res.send('현재 세션에 myName 값이 저장되어 있지 않습니다.');
    }
});

app.get('/session/clear', (req, res) => {
    req.session.destroy();
    res.send('세션을 비웠습니다.');
});

// POST
app.post('/', (req, res) => {
    res.send('hello express. this is POST');
});

// another Path
app.get('/about', (req, res) => {
    res.send('hello express. this is about.');
});

// Route parameter
// 일관성있는 주소 여러개를 변수화 할 수 있다. (:var -> req.params.var)
// Route parameter는 다른 라우터보다 아래에 위치하는 것이 좋다. 이미 정의된 라우터에 우선순위를 준다.
app.get('/category/:name', (req, res) => {
    res.send(`hello! my name is ${req.params.name}.`);
});

// '*'는 모든 get 요청을 다 받아버린다.
// 가장 뒤에 위치해야 한다. 이유는 위와 같다.
// app.get('*', (req, res) => {
//     res.send('hello everybody!');
// });

// 5. 에러 처리 Middleware
// 찾는 라우터 주소가 존재하지 않는 경우
app.use((req, res) => {
    res.send('404 에러입니다.');
});

// 에러가 발생한 경우(인자 개수 4개 꼭 지켜야 함)
app.use((err, req, res, next) => {
    console.error(err);
    // 기본적으로 status code는 명시하지 않으면 200으로 설정되어 있다.
    // 하지만 원하는 경우 다른 코드로 변경해서 클라이언트가 오류 정보를 알 수 없게 할 수 있다.
    res.status(200).send('예기치 못한 에러가 발생했습니다. 고객 센터로 문의해주세요.');
});

// 6. listen
app.listen(app.get('port'), () => {
    console.log(`Run express server on PORT:${app.get('port')}`);
});

/*##################################################
[http]
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('안녕하세요.');

다음과 같이 축약 가능해졌다.

[express]
res.status(200).send('안녕하세요.');
상태 코드 200은 기본 값이므로 생략 가능하다.
res.send('안녕하세요.');
 ##################################################*/
/*##################################################
[http]
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ hello: 'world' }));

다음과 같이 축약 가능해졌다.

[express]
res.json({ hello: 'world' });
 ##################################################*/