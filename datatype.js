/* 
Every Variable has a data type that tells what kind of data is being stored in a variable. There are two types of data types in JavaScript.
1.Primitive data types(7) - Numbers,Strings,Booleans,null,undefined,BigInt,Symbol.
2.Non-primitive data types(1) - object.
*/

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Lait";

// Booleans
let x = true;
let y = false;

//Null
let box = null;
let room = null;

//Undefined
let players = undefined;
let places = undefined;

//BigInt
let bigNum = 123422222222222222222222222222222222222n;
let bigNum2 = 70000000000000000000000000000000000000n;

//Symbol
let sym = Symbol("Hello");

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

console.log(typeof sym);
