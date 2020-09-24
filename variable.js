// 1. Use strict
// typescript가 아닌 vanilla js로 코딩할 때 다음 문장을 추가해주자.
// 오류를 예방하는 역할을 수행한다.
'use strict';


// 2. Variable -> let: Mutable
// global 전역
let a = 123;
{ // block scope: 지역
    let b = 456;
    console.log(a + b);
}
// console.log(a + b); -> Error!!
// var은 쓰지말자. block scope 미지원, 자동 hoisting 등등..


// 3. Constant -> const: Immutable
// 상수 타입이다.
// 웬만하면 const 타입으로 사용하면 보안에도 좋다.
const days = 7;


// 4. Variable types
// 숫자 타입이 나눠져있지 않고, number로 뭉쳐져있고, 함수 타입 리턴 등이 가능하다는 점 알고있자.
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
// expected output: "value: 17, type: number"
console.log(`value: ${size}, type: ${typeof size}`);
// expected output: "value: 17.1, type: number"

// Big Integer (Only in Chrome | Firefox)
// 끝에 n 이라고 명시해주면 Big Integer type으로 처리한다.
const bigInt = 123456789123456789123456789123456789123456789n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
// expected output: "value: 123456789123456789123456789123456789123456789, type: bigint"

// special number: Infinity, -Infinity, NaN(Not a Number)
const Inf = 1 / 0;
const negInf = -1 / 0;
const nan = 'fxxking string' / 123;
console.log(Inf); // expected output: "Infinity"
console.log(negInf); // expected output: "-Infinity"
console.log(nan); // expected output: "NaN"

// string은 backtick을 사용한 template literals를 사용하도록 하자.
const name = 'jonas';
const str = `My name is ${name}. Nice to meet you :)`;
console.log(str);
// expected output: "My name is jonas. Nice to meet you :)"

// boolean type
// false: 0, null, undefined, NaN, '' -> 뭔가 없는것들
// true: 뭔가 있는것들
const boo1 = true;
const boo2 = 1 > 3;
console.log(`value: ${boo1}, type: ${typeof boo1}`);
// expected output: "value: true, type: boolean"
console.log(`value: ${boo2}, type: ${typeof boo2}`);
// expected output: "value: false, type: boolean"

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
// expected output: "value: null, type: object"

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);
// expected output: "value: undefined, type: undefined"

// Symbol type
// 고유한 식별자 생성할 목적으로,
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // expected output: "false"
// 동일한 symbol 값을 가지게 하려면 for 속성을 추가한다.
const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 === symbol4); // expected output: "true"
// 출력할 때는 description 속성을 추가해서 string 타입으로 바꿔준 후 출력해야 한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// expected output: "value: id, type: symbol"


// 5. Dynamic typing
// 쉽게 말하자면 지 맘대로 타입을 바꿔버림
// 런타임 에러의 주범!!
let text = 'hello';
console.log(text.charAt(0)); // expected output: "h"
console.log(`value: ${text}, type: ${typeof text}`);
// expected output: "value: hello, type: string"
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
// expected output: "value: 1, type: number"
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
// expected output: "value: 75, type: string"
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// expected output: "value: 4, type: number"
// console.log(text.charAt(0)); -> Error!


// 6. Object 간략히~
// mandu Object가 다른 Object가 될 수는 없지만 값 변경은 가능.
const mandu = {
    name: 'dimsum?',
    age: 9876
};
console.log(`name: ${mandu.name}, age: ${mandu.age}`);
// expected output: "name: dimsum?, age: 9876"
// const라도 각 요소는 변경 가능하다.
mandu.name = 'goguma';
mandu.age = 123;
console.log(`name: ${mandu.name}, age: ${mandu.age}`);
// expected output: "name: goguma, age: 123"