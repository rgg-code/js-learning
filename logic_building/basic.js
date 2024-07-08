// problem 1 add two no using fun
// function sum(a, b){
//     const sum = a+b;
// console.log(sum)

// }

// sum(63, 7)

// problem 2 find area of rectangle

// function areaRect(length, width) {
//     if(length <= 0) {
//         throw new Error("Length should be a positie number");
//     }
//     if(width <= 0) {
//         throw new Error("width should be a positie number");
//     }
//   const area = length * width;
//   console.log(`area of rectangle : ${area}`);
// }

// areaRect(5, 4);

//problem 3 odd - even no

// function OddorEven(num){

// const remainder = num %2
// console.log(remainder)
// (num % 2 === 0) ? console.log('Even'): console.log('odd');
// if(num % 2 === 0 ){

// console.log(`given number is Even : ${num} `);
// }else{
//     console.log(`given number is Odd : ${num}`)
// }
// }
// OddorEven(9)

// problem 4 find and print the smalledt number among three given numbers.

// function findMinVal(a, b, c) {
//   if (a < b && a < c) {
//     return a;
//   } else if (b < a && b < c) {
//     return b;
//   } else if (c < b && c < a) {
//     return c;
//   }
// return a;
// }

// // console.log("min of three no (5,4,7): ", findMinVal(5,4,7));

// function smallestNumber(a,b,c){
//     let smallestNumber = a;
//     if(b < smallestNumber){
//         smallestNumber = b;
//     }
//     if(c<smallestNumber){
//         smallestNumber = c;
//     }

//     return smallestNumber;
// }

// console.log("min of three no (5,4,7): ", smallestNumber(1,4,7));