const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        // HTML 파일에서 소스코드를 가져온다.
        const data = await fs.readFile('./server2.html');
        res.end(data);
    } catch (error) {
        console.error(error);
        // 에러 메시지는 일반 문자열(plain) 형태로 보내준다.
        res.writeHead(200, {'Context-Type': 'text/plain; charset=utf-8'});
        res.end(error.message);
    }
})
    .listen(8082, () => {
        console.log('8082번 포트에서 서버 대기 중입니다.');
    });