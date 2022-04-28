"use strict";
// Basic Types
let age = 20;
let firstName = "maxwel";
let isMarried = true;
// We can change values of the vars but not the types
// Error == Type 'string' is not assignable to type 'number'
// age = "maxwel"
// functions
// they also takes type
const circle = (diamter) => {
    return diamter * Math.PI;
};
circle(20);
// Arrays
const names = [10, 20, 30];
// Allowed
names.push(20);
//  Not allowed beacuse array is of type numbers
// names.push("maxwel");
// The above method implies to string array
const mixed = ["maxwe", true, 6];
// The above array is of mixed array type and If I try to push any type it will accept no error
mixed.push(false);
mixed.push("ochieng");
mixed.push(10);
// No error since the array instantiated is of type mixed. or diverse
// Objects
// an Object can contain different types
const obj = {
    name: "Maxwel",
    depart: "IT",
    age: 40,
};
// Explicit types
let Myage;
let myName;
let ninjas;
Myage = 40;
myName = "maxwel";
// If I try to add a  number it will cause an error
ninjas = ["Ochieng"];
// Union Types
// If we want to initiaize a var that can take two types.
// The () is used to initialize the types
let mixedTypes;
//can be used with vars
let uuid;
uuid = "maxwel";
uuid = 30;
// Explicit types objects
let ninjaObject;
ninjaObject = { name: "Maxwel", age: 40 };
// It can be initialized to Array
ninjaObject = [];
// to avoid this we can strictly make it object
let ninjaOne;
ninjaOne = {
    age: 30,
    name: "maxwel",
    beltColor: "blue",
};
// Type any
// We can change this variable to any type
let num = 30;
console.log(num);
num = "Maxwel";
console.log(num);
num = { name: "ochieng" };
console.log(num);
const mix = [];
mix.push(9);
mix.push("max");
// defining type
// function types
// seeting a default value in parameter
const add = (a, b = 9) => {
    return a + b;
};
add(5);
// optional parameter typescript
const minus = (a, b, c) => {
    return a + b;
};
// Without the optional chaining character(?) the would be an error(>>Expected 3 arguments, but got 2 )
minus(5, 7);
const logdetails = (uuid, item) => {
    console.log(`${item} has a uuid of ${uuid}`);
};
const sayHi = (user, uuid) => {
    console.log(`${user.name} of id: ${uuid} says hello`);
};
sayHi({ name: "maxwel", uuid: "uiu68996" }, 5667889);
// Function Types (Signatures)
// Example 1
// function signature
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// Exmaple 2
// function signature
let calc;
calc = (num1, num2, action) => {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num2 - num1;
    }
};
calc(50, 20, "sub");
// Exmple 3
let logDetails;
logDetails = (user) => {
    console.log(`${user.name} is ${user.name} years old`);
};
