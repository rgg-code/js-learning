// primitive 

// 7 type : string, num, boolean, null, undefined, symbol, bigint

// reference type / non-primitive type

// Array, Objects, Functions

// most imp in js object and web-browser events 
//array
const heros= ["Ram", "Krishna", "Arjun"];
//object
let attendence = 
{
    name : "Ram",
 
    toaten: 10
}
// console.log(typeof attendence)


// stack (primitive)-> memory copy , Heap(non-primitive)-> refference (change in original value)

let userOne = {
    name:"ram",
    email:"google@ybl"
}

let userTwo = userOne
userTwo.email = "ram@12gmail.com";

console.log(userOne.email)
console.log(userTwo.email)

const name = "ram"
const count = 40

// console.log(`student name is ${name} and counts is ${count}`)


console.log(name.toUpperCase());
console.log(name.length);
console.log(name.charAt(2));
