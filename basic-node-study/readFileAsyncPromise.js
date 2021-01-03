const fs = require('fs').promises;

console.log('### readFileAsync.js 실행 ###');

async function main() {
    let data = await fs.readFile('./test.txt');
    console.log('1번', data.toString());
    data = await fs.readFile('./test.txt');
    console.log('2번', data.toString());
    data = await fs.readFile('./test.txt');
    console.log('3번', data.toString());
    data = await fs.readFile('./test.txt');
    console.log('4번', data.toString());
}
main();

console.log('### readFileAsync.js 종료 ###');

/**
 * 위와 같이 프로그램을 작성하면 항상 1-2-3-4 순서로 실행되는 것을 볼 수 있다.
 * 때문에 프로그램 내부의 순서성을 살릴 수 있다.
 * readFileAsyncPromise.js를 여러번 실행시키면 비동기로 실행되지만, 프로그램 각각은 순서성을 가지고 실행된다.
 */