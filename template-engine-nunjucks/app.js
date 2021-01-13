const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const nunjucks = require('nunjucks');

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'njk'); // *.njk 확장자를 view engine으로 한다.
// HTML로 하고싶다면 ('view engine', 'html')로 해도 상관없다.

nunjucks.configure('views', {
    express: app, // express 속성에 app 객체를 연결
    watch: true, // HTML 파일이 변경될 때 템플릿 엔진을 다시 렌더링
});

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});