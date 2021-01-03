const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

// console.time와 console.timeEnd는 같은 레이블을 가진 값 사이의 실행 시간을 측정해서 출력합니다.
console.time('전체 시간');
console.log('평범한 로그입니다. 쉽표로 구분해 여러 값을 찍을 수 있습니다.');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요.');

// 배열 요소로 객체 리터럴을 담으면, 객체의 속성들이 테이블 형태로 출력됩니다. (index포함)
console.table([{ name: '제로', birth: 1994 }, { name: 'hero', birth: 1998 }]);

// 콘솔에 Object타입을 출력할 때 console.dir을 사용하면 여러 옵션을 부여할 수 있다.
// colors=true를 하면 콘솔에서 출력될 때 색깔이 생겨서 보기 편해진다.
// depth는 출력할 Object의 깊이를 설정합니다.
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time('시간 측정');
for (let i = 0; i < 100_000; i++) {}
console.timeEnd('시간 측정');

function b() {
    // 에러가 발생한 위치를 추적할 수 있습니다.
    console.trace('에러 위치 추적');
}
function a() {
    b();
}
a();

console.timeEnd('전체 시간');


