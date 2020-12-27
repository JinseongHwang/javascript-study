
'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// JSON.stringify(obj);
let json = JSON.stringify(true);
console.log(json);

// JSON에서는 쌍따옴표가 표준이다.
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// Object의 다양한 타입을 JSON으로 변환하자.
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // 함수는 Object에 있는 데이터가 아니기 때문에 JSON에 포함되지 않는다.
    jump: () => {
        console.log(`${name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

// 원하는 prorperty만 가져오는 것도 두 번째 매개변수에 알려줌으로써 가능하다.
json = JSON.stringify(rabbit, ['name', 'size']);
console.log(json);

console.log('------------------------');

// call back 함수를 활용해서 JSON을 조금 더 세밀하게 다룰 수 있다.
// 처음에는 Object의 최상위 값에 접근하고, 그 다음부터 실질적인 데이터에 접근한다.(출력값 참고)
// key가 name property를 참조할 때 'ellie'를 value로 가지고, 나머지는 원래 value를 가진다.
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
    // return value; // 기본적으로 value를 return한다.
});
console.log(json);

console.clear();


// 2. JSON to Object
// JSON.parse(json);
json = JSON.stringify(rabbit);

const obj = JSON.parse(json);
console.log(obj);

rabbit.jump(); // 원래 rabbit에는 jump()메서드가 있었다.
// obj.jump(); // 하지만 JSON으로 변환될 때 메서드는 포함되지 않으므로 이젠 사용할 수 없다.

console.log(rabbit.birthDate.getDate()); // 원래 rabbit에 birthDate는 Date객체이기 때문에 포함된 메서드를 사용 가능하다.
// console.log(obj.birthDate.getDate()); // 하지만 JSON으로 변환될 때 string타입으로 변환되기 때문에 이젠 사용할 수 없다.

// 아래와 같이 call back 함수를 작성하면 birthDate를 다시 Date객체로 가져올 수 있다.
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate()); // 위에서 불가능했던 것이 가능해졌다.