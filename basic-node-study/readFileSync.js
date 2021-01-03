const fs = require('fs');

console.log('### readFileSync.js 실행 ###');

let data = fs.readFileSync('./test.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./test.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./test.txt');
console.log('3번', data.toString());
data = fs.readFileSync('./test.txt');
console.log('4번', data.toString());

console.log('### readFileSync.js 종료 ###');

/**
 * 동기적으로 파일을 읽고자 한다면 readFileSync 메서드를 사용하면 된다.
 */