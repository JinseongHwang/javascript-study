
'use strict';

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`); // use backtick


// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);


// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;
x %= y;


// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal


// 6. Logical operators -> || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false

// || (or) 연산자는 true인 최초의 하나만 검증하고, 찾았다면 검증을 중단하고 true를 반환한다.
console.log(`or: ${value1 || value2 || check()}`);
function check() {
    console.log("마지막 검사");
    return true;
}
// && (and) 연산자도 마찬가지로 최초의 하나만 검증해서 false라면 검증을 중단한다.
// 따라서 무거운 연산일 수록 뒤로 미뤄 적어서 함수 호출 등을 최소화 하도록 코드를 작성하자.
console.log(!value1); // not


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// '==' loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// '===' strict equality, no type conversion
// 대부분의 경우에 타입 검사까지 하는 '==='을 사용한다.
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// Object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false: 서로 다른 reference가 저장되어 있기 때문이다.
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true


// 8. Conditional operators: if
const name2 = 'coder';
if (name2 === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name2 === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? true_value : false_value
console.log(name2 === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
const browser = 'IE';
switch(browser) {
    case 'IE':
        console.log('Go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('I love you~');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while, do-while, for
// break, continue
// C랑 다 똑같다.