// function reverseString(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result = result + str[i];
//   }
//   return result;
// }

// console.log(reverseString("gopal"));


function reverseString2(inpStr){
    const splittedInput = inpStr.split('');
    const reverseArray = splittedInput.reverse();
    const result = reverseArray.join('');
    return result;
}
console.log(reverseString2('shyam'))
