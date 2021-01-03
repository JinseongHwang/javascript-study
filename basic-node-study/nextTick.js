setImmediate(() => {
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));

/* [출력 결과]
 nextTick
 promise
 timeout
 immediate
 */
// resolve된 Promise와 nextTick은 다른 콜백들보다 우선시된다.
// 이러한 콜백들을 "마이크로 태스크"라고 부른다.
// 마이크로 태스크는 일반적인 태스크보다 우선시된다.