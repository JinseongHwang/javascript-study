
'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending(보류) -> fulfilled(성공) or rejected(실패)
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, read files)
    // 시간이 조금 오래 걸리는 작업들을 비동기 처리한다.
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie'); // 성공했을 경우 resolve 호출
        //reject(new Error('No network.')); // 실패했을 경우 reject 호출
    }, 2000);
});


// 2. Consumer: then, catch, finally
promise
    .then((value) => { // callback함수를 실행하고 Promise를 다시 반환한다. -> Promise chaining
        console.log(value);
    })
    .catch(error => { // Error가 발생했을 때 실행할 callback함수 작성
        console.log(error);
    })
    .finally(() => { // Error 발생 여부와 상관없이 실행
        console.log('finally');
    });


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        //setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`Error! ${hen} => 🥚`)), 1000);
    });
const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));

// can simplify
getHen()
    .then(getEgg)
    .catch(error => '🍞') // getEgg에서 Error 발생 시 빵을 대신 전달한다.
    .then(cook)
    .then(console.log)
    .catch(console.log); // 오류 잡기