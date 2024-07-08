// write a function that calculate factorial of given number.

// function calculateFactorial(inputNum) {
//     if(inputNum < 0){
//         throw new Error("inputnum should be greater than or equal to zero");
//     }
//   let result = 1;
//   for (let i = 1; i <= inputNum; i++) {
//     result = result * i;
//   }
//   //   console.log(result);
//   return result;
// }
// console.log(calculateFactorial(4)

// using recursion 

// function calculateFactUsingRecursion(inputNUM){
//     console.log(`inputNUm`, inputNUM);
//     if(inputNUM < 0){
//                 throw new Error("inputnum should be greater than or equal to zero");
//             }
//     if(inputNUM == 0 || inputNUM == 1){
//         return 1;
//     }

//     return inputNUM * calculateFactUsingRecursion(inputNUM-1)
    
// }

// console.log(calculateFactUsingRecursion(4));