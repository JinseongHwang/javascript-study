
'use strict';

// 1. Function declaration
// function name(param1, param2, ..) { body... return; }
// 하나의 함수는 하나의 기능만 수행하도록 작성해야 한다.
// name: doSomething, command, verb 형태로 명명한다.
// e.g. createCardAndPoint -> createCard, createPoint: 하나의 기능만 수행하도록 분리한다.
// 함수 또한 JS에서는 Object 타입이다.

function log(message) {
    console.log(message);
}
// type check가 일어나지 않기 때문에 좋지 못한 상황이다.
// 여유가 생기면 typescript도 꼭 배워보자.
log('Hello111');
log(123);


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changePremitive(val) {
    val = 6;
}
function changeObject(obj) {
    obj.name = 'coder';
}
let val = 2;
changePremitive(val);
console.log(val); // still has 2
const obj = {
    name: 'ellie'
};
changeObject(obj);
console.log(obj); // change to 'coder'


// 3. Default Parameters (added in ES6)
// 전달받지 않은 param에 대해 default값을 설정해줄 수 있다.
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!!');


// 4. Rest Parameters (added in ES6) 
// ... 을 찍으면 배열 형태를 전달받겠다는 의미이다.
function printAll(...args) {
    // normal for loop
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // for-of loop
    for (const arg of args) {
        console.log(arg);
    }

    // for-each loop
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie', 'jinseong');


// 5. Local scope
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();
// console.log(message); // 접근 불가능


// 6. Return a value
// 모든 함수는 묵시적으로 return undefined; 를 가지고 있다.
function sum(a, b) {
    return a + b;
}
console.log(`sum: ${sum(1, 2)}`); // sum: 3


// 7. Early return, early exit
// bad type
function upgradeUser1(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good type
function upgradeUser2(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


///////////////////////////////////////////////////////////////////////////////////


// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// 함수 선언식은 JS engine에 의해 hoist 되어서 선언 위치와 상관 없이 사용 가능하다.
// a function expression is created when the execution reaches it. (not hoisted)
// 함수 표현식은 hoist 되지 않고, 변수에 reference 값을 담아서 다른 변수로도 호출 가능하다.
const print = function() {
    // anonymous function: in function expression
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(3, 5));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function() {
    console.log('Yes!');
}
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function printAAA() {
    console.log('No!');
    // printAAA(); -> 무한 반복
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// 3. Arrow function
// Always anonymous function
const simplePrint = () => console.log('Hello Simple Print');
const simpleSum = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}
simplePrint();
console.log(simpleSum(2, 3));
console.log(simpleMultiply(3, 5));


// 4. IIFE: Immediately Invoked Function Expression
// 함수 선언과 실행을 동시에 진행하고 싶다면,
// 기존의 함수 전체를 ()로 감싸고, ()를 뒤에 붙여주면 된다.
(function useIIFE() {
    console.log('IIFE');
})();