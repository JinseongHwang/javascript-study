console.log(this); // {}

function a() {
    console.log(this); // === global
}
a();

console.log('----------------');
console.log(module.exports === exports); // true
console.log(module.exports === this); // true
console.log(this === exports); // true
console.log(this === global); // false
console.log(this === {}); // false
