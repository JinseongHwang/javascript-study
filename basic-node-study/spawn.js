const { spawn } = require('child_process');

// Node에서는 멀티스레딩을 구현하기 힘드니,
// 비교적 간단한 언어(C++, python, Go...)로 구현한 후 Node로 가져와서 실행해도 된다.
const process = spawn('python', ['test.py']);

process.stdout.on('data', (data) => {
    console.log(data.toString());
});
process.stderr.on('data', (data) => {
   console.log(data.toString());
});