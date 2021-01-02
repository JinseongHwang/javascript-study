
'use strict';

// Objects
// object = { key: value };

// 1. Literals and Properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed properties
// 두 가지 방법으로 Object의 요소에 접근 가능하다.
console.log(ellie.name);
console.log(ellie['name']); // key는 항상 string으로 받아와야 한다.
ellie['hasJob'] = true;
console.log(ellie['hasJob']);

function printValue(obj, key) {
    // console.log(obj.key); -> 전달받은 obj객체에서 key라는 key를 찾는다.
    // 이럴 경우 Computed properties를 사용하면 적절하다.
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand
// 조금 더 간략하고, 직관적으로 Object를 생성하는 방법이 있다.
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = new Person('dave', 4);
const person4 = new Person('ellie', 5);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

// 4. Constructor function
// 생성자스럽게 사용하는 함수이다. 함수 명명법이 클래스 명명법을 따라간다.
// return 등이 생략되어도 목적에 맞게 작동한다.
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator: property existence check (key in object)
console.log('name' in ellie);
console.log('abcefg' in ellie);


console.clear(); // clear console


// 6. for-in vs for-of
// for (key in obj)
for (let key in ellie) {
    console.log(key)
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
    console.log(value);
}


// 7. Fun cloning
const user = { name: 'ellie', age: 20 };

// old way
const user2 = {};
for (let key in user) {
    user2[key] = user[key];
}
console.log(user2);

// new way
// Object.assign(dest, [obj1, obj2, obj3...]);
const user3 = Object.assign({}, user);
console.log(user3);

const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed); // color: 'blue', size: 'big'
// 여러 Object를 assign하면 동일한 key에 대해서는 더 뒤에 나타나는 value로 갱신된다.
