const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // Header: HTML이라고 알려줌
    res.write('<h1>Hello Node!</h1>'); // Body
    res.write('<p>Hello server.</p>');
    res.end('<p>Goodbye Zerocho</p>'); // response를 종료하는 메서드
});
server.listen(8080);

server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error', err => {
    console.error(err);
});

// 8081 포트에도 다른 서버 사용
const server_ = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // Header: HTML이라고 알려줌
    res.write('<h1>Hello Node!</h1>'); // Body
    res.write('<p>Hello server.</p>');
    res.end('<p>Goodbye Zerocho</p>'); // response를 종료하는 메서드
});
server_.listen(8081);

/**
 * http의 경우에는 포트: 80 이 생략된다.
 * https의 경우에는 포트: 443 이 생략된다.
 */