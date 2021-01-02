
'use strict';

// Object-oriented programming
// class: template
// object: instance of a class
// Javascript Classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance(프로토타입 기반 문법 추가)

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // method
    speak() {
        console.log(`${this.name}: hello!!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // getter와 setter에서 변수명에 '_'를 붙여서 무한 호출을 방지한다.
    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }

        // this._age = value;

        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);


// 3. Fields (public, private)
// 너무 최근에 도입된 문법이기 때문에, 많이 사용되지 않는다.
// 또한 대부분의 브라우저에서 아직 지원하지 않는다.
// 사용하고자 하면 Babel 필수!
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // public이기 때문에 외부에서 접근 가능
console.log(experiment.privateField); // private이기 때문에 외부에서 접근 불가


// 4. Static properties and methods
// Java랑 대부분 동일하다.
class Article {
    static publisher = 'Dream Coding';
    constructor(articleName) {
        this.articleName = articleName;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// static 변수 또는 메서드는 클래스명으로 바로 접근해야 한다.
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance (상속)
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}

// extends 키워드로 상속받고, 상속받으면 부모 클래스의 모든 필드와 메서드 사용 가능
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() { // Override
        super.draw(); // 부모 클래스의 함수를 호출한다.
        console.log('🔺');
    }
    getArea() { // Override
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 30, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
// A instanceof B: A가 B의 인스턴스인가? boolean 타입으로 반환한다.
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
// Object는 모든 클래스의 상위 클래스이다.
console.log(triangle instanceof Object); // true
