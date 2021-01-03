const os = require('os');

console.log('운영체제 정보---------------------------------');
console.log('os.arch():', os.arch()); // 아키텍처 정보
console.log('os.platform():', os.platform()); // OS 정보
console.log('os.type():', os.type()); // OS 종류
console.log('os.uptime():', os.uptime()); // 부팅 이후 실행된 시간 (초)
console.log('os.hostname():', os.hostname()); // 컴퓨터 이름
console.log('os.release():', os.release()); // OS 버전

console.log('경로------------------------------------------');
console.log('os.homedir():', os.homedir()); // 홈(사용자) 경로
console.log('os.tmpdir():', os.tmpdir()); // 임시 파일 저장 경로

console.log('cpu 정보--------------------------------------');
console.log('os.cpus():', os.cpus()); // CPU 코어 정보
console.log('os.cpus().length:', os.cpus().length); // CPU 코어 개수

console.log('메모리 정보-----------------------------------');
console.log('os.freemem():', os.freemem()); // 사용 가능한 메모리
console.log('os.totalmem():', os.totalmem()); // 전체 메모리