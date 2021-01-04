const express = require('express');
const path = require('path');

// 1. App 생성
const app = express();

// 2. App 설정
// 포트를 app에 직접 설정 가능하다. 전역 변수 느낌으로
app.set('port', process.env.PORT || 3000);

// 3. 공통 Middleware
// app.use 역시 첫 번째 매개변수에 경로를 적어주면 그 경로에서만 실행된다.
app.use((req, res, next) => {
    console.log('미들웨어가 실행되었습니다.');
    next();
}, ((req, res, next) => {
    try {
        console.log('다음 미들웨어입니다.');
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
    console.log('Run express server on PORT:3000');
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