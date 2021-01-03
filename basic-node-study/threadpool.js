const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('1', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('2', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('3', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('4', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('5', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('6', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('7', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
    console.log('8', Date.now() - start);
});

/**
 * 기본적으로 4개까지 백그라운드에서 스레드풀 모듈을 사용 가능하다.
 * 따라서 위와 같이 비동기 메서드 8개를 실행하면,
 * (순서는 항상 다름)[1, 2, 3, 4] 와 [5, 6, 7, 8]이 비교적 긴 시간 간격을 두는 모습을 확인할 수 있다.
 * 하지만 SET UV_THREADPOOL_SIZE=8 명령어로 8개의 코어를 사용해서 일괄적으로 8개를 처리할 수도 있다.
 */