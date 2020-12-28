
'use strict';

// async & await
// clear style of using promise :)

// 1. async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         // do network request in 10secs...
//         resolve('ellie');
//     });
// }

// same with
async function fetchUser() {
    // do network request in 10secs...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// 직렬 구조
async function pickFruitsSerial() {
    const apple = await getApple();
    const banana = await getBanana();
    return `Serial => ${apple} + ${banana}`;
}

// 직렬 구조의 병렬화
async function pickFruitsParallel() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `Parallel => ${apple} + ${banana}`;
}

pickFruitsSerial().then(console.log);
pickFruitsParallel().then(console.log);


// 3. useful Promise APIs
// all: 병렬 코드를 깔끔하게.
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// race: 먼저 반환되는 하나만 return한다.
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);