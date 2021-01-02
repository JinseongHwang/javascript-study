
'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
let fruits = ['🍓', '🥝', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); // out of range
console.log(fruits[fruits.length - 1]); // last element


// 3. Looping over an array
// for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for-of
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach
fruits.forEach((fruit) => console.log(fruit));

// forEach with Index
fruits.forEach((fruit, index) => {
    console.log(fruit, index);
});


// 4. Addtion, deletion, copy
// push (add an item to the end)
fruits.push('🍍', '🍎');
console.log(fruits);

// pop (remove an item from the end)
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift (add an item to the beginning)
fruits.unshift('🍉', '🍑');
console.log(fruits);

// shifh (remove an item from the beginning)
fruits.shift();
console.log(fruits);

// note!! shift와 unshift는 push와 pop보다 훨씬 느리다.
// 빈번히 사용해야 하는 경우에는 프로그램의 성능에 영향이 있을 수 있다.

// splice (remove an item by index position)
fruits.splice(2, 1); // 2부터 1개 제거
console.log(fruits);
fruits.splice(1); // [1~] 모두 제거
console.log(fruits);

// concat (combine two arrays)
const fruits2 = ['🥑', '🍒', '🌽'];
fruits = fruits.concat(fruits2);
console.log(fruits);


//console.clear();


// 5. Searching
// indexOf (find the index)
console.log(fruits.indexOf('🍑')); // 0
console.log(fruits.indexOf('🥑')); // 1

// includes
console.log(fruits.includes('🍒')); // true
console.log(fruits.includes('🥕')); // false

// lastIndexOf
fruits.push('🍑');
console.log(fruits);
console.log(fruits.indexOf('🍑')); // 첫 복숭아의 Index를 반환
console.log(fruits.lastIndexOf('🍑')); // 마지막 복숭아의 Index를 반환