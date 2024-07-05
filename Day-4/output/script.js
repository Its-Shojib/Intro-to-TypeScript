"use strict";
//Commands are:
//tsc --init
//tsc -w
//tsc script.ts
//tsc
// Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const Person1 = new Person('Shojib', 24);
const Person2 = new Person('Masum', 23);
const Persons = [];
Persons.push(Person1);
Persons.push(Person2);
console.log(Person1.greet());
console.log(Person2.greet());
//Access Modifier
class Employee extends Person {
    constructor(name, age, department, salary) {
        super(name, age);
        this.department = department;
        this.salary = salary;
    }
    getDepartment() {
        return {
            department: this.department,
            salary: this.salary
        };
    }
}
const Employee1 = new Employee('Sakib', 30, 'IT', 20000);
console.log(Employee1.getDepartment());
// { department: 'IT', salary: 20000 }
