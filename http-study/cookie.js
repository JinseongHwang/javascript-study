const http = require('http');

let cnt = 1;

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    // 쿠키를 response 헤더에 담아서 보낸다.
    // 여러 값을 보내고 싶다면 배열 형태로 보내면 된다.
    res.writeHead(200, {'Set-Cookie': ['name=jsjs', 'testkey=testvalue']});
    res.end(`Hello Cookie ${cnt}`);
    cnt++;
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기 중입니다.');
    });