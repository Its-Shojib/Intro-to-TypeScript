"use strict";
//Commands are:
//tsc --init
//tsc -w
//tsc script.ts
//tsc
//DataTypes
let a = "Md Shojib Hossain";
let b = 25;
let c = true;
let d = "Hello World";
console.log(a, b, c, d);
//Arrays
let e = [];
e = ["Md Shojib Hossain", 25, true];
console.log(e);
//Objects
let f;
f = {
    name: "Md Shojib Hossain",
    age: 24,
    isStudent: true
};
console.log(f);
//Functions
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Md Shojib Hossain");
function sum(x, y) {
    return x + y;
}
console.log(sum(10, 20));
//Union Types
let x = [];
x.push("Hello");
x.push(10);
console.log(x);
let y;
y = "Hello";
console.log(y);
y = 10;
console.log(y);
