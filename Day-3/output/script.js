"use strict";
//Commands are:
//tsc --init
//tsc -w
//tsc script.ts
//tsc
let myFun;
myFun = () => {
    console.log("Hello world!");
};
myFun();
// myFun = 5; //This will provide an error message;
let paraMeteresFunc = (a, b, c) => {
    console.log(a + b);
    if (c) {
        console.log(c);
    }
};
paraMeteresFunc(3, 4, 'Optional variable');
let returnTypes = (a, b, c) => {
    if (c) {
        console.log(c);
    }
    return a + b;
};
console.log(returnTypes(5, 7));
let user = {
    name: "John Doe",
    description: "Software Developer",
    age: 30,
    isStudent: true
};
let userDetails = (id, user) => {
    console.log(`User ID: ${id}`);
    console.log(`User Name: ${user.name}`);
    console.log(`User Description: ${user.description}`);
    console.log(`User Age: ${user.age}`);
    console.log(`User Is Student: ${user.isStudent}`);
};
userDetails("123", user);
