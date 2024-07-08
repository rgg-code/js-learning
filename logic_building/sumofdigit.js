// function CalsumOfDigit(num){
//     if(num < 1) {
//         throw new Error("num must be a positive no.")
//     }

//     const inputstr = num.toString();
//     const splitinputstr = inputstr.split('');
//     console.log(splitinputstr);
// let sumOfDigit = 0;
//     splitinputstr.forEach(num => {
//         sumOfDigit= sumOfDigit + parseInt(num);
//     })
//     return sumOfDigit;
// }

// console.log(CalsumOfDigit(4))

// function calSumOfDigits(num){
// let sumOfDigit = 0;
//     while(num > 0){
//         let lastDigit = num % 10;
//         num = Math.floor(num/10);
//         sumOfDigit = sumOfDigit + lastDigit;
//     }
//     return sumOfDigit;
// }
// console.log(calSumOfDigits(6));