// js only hoists  declarations, 
// not initialization the variable will be undefined 
// until the line where its initilized is reached  
// function expresion is not hoisting 

// following two lines will run successfully due to javascript hoisting
console.log(a);
greet() // its execute bcz function decleration are comes on tops.

function greet() {
    console.log("Good Morning")
}

var a = 2; // Declaration hoisted to the top but initialization is not
console.log(a)

// note 
// function expression and class expression are not hoisted

