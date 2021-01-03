const fs = require('fs');

console.log('### readFileAsync.js 실행 ###');

fs.readFile('./test.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./test.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./test.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});
fs.readFile('./test.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('4번', data.toString());
});

console.log('### readFileAsync.js 종료 ###');

/**
 * 실행 메시지를 출력하고, 1 2 3 4번 실행을 백그라운드에 넣고 종료 메시지를 출력한다.
 * 종료메시지를 출력하면 호출 스택이 비게 되므로 백그라운드의 작업들을 이벤트 루프에 의해 실행시킨다.
 * 하지만 모두 동일한 함수이므로 매번 실행 결과가 바뀐다. 즉 랜덤으로 정해지는 것과 다를 바 없다.
 */