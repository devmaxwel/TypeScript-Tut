// Basic Types
let age = 20;
let firstName = "maxwel";
let isMarried = true;

// We can change values of the vars but not the types
// Error == Type 'string' is not assignable to type 'number'
// age = "maxwel"

// functions
// they also takes type
const circle = (diamter: number) => {
  return diamter * Math.PI;
};

circle(20);

// Arrays
const names = [10, 20, 30];
// Allowed
names.push(20);
//  Not allowed beacuse array is of type numbers
names.push("maxwel");
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
let Myage: number;
let myName: string;
let ninjas: string[];

Myage = 40;
myName = "maxwel";
// If I try to add a  number it will cause an error
ninjas = ["Ochieng"];

// Union Types
// If we want to initiaize a var that can take two types.
// The () is used to initialize the types
let mixedTypes: (string | number | boolean)[];
//can be used with vars

let uuid: string | number;
uuid = "maxwel";
uuid = 30;

// Explicit types objects
let ninjaObject: object;
ninjaObject = { name: "Maxwel", age: 40 };
// It can be initialized to Array
ninjaObject = [];
// to avoid this we can strictly make it object
let ninjaOne: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaOne = {
  age: 30,
  name: "maxwel",
  beltColor: "blue",
};

// Type any
// We can change this variable to any type
let num: any = 30;
console.log(num)
num = "Maxwel";
console.log(num);
num = { name: "ochieng" };
console.log(num)

const mix:any[]=[]
mix.push(9)
mix.push("max") 

// defining type

