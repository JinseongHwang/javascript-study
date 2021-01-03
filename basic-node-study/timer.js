const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다.');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2);
/**
 * setImmediate(callback Fn)와 setTimeout(callback Fn, 0)에 있는 콜백 함수들은 이벤트 루프를 거친 뒤 실행된다.
 * 유사하긴 하지만, 항상 setImmediate가 setTimeout0 보다 먼저 실행되는 것이 아니기 때문에 일관성을 지키는 것이 좋다.
 * 이벤트 루프를 거친 뒤 바로 실행되길 바란다면 setImmediate를 사용하자.
 */