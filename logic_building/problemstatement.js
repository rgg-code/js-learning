// part10 ...

// waf that return the result of raising a given number to a specified power.
// input : two Numbers
// 1.Base
// 2.exponent
// return Base to the power of exponent
// example: 2,3: 2*2*2=8

// **********************************************************
// function calculatePower(base, exponent) {
//   let result = 1;
//   for (let i = 1; i <= exponent; i++) {
//     result = result * base;
//   }
//   return result;
// }

// console.log(calculatePower(3,3));

// problem statement 11

// waf that counts and prints the number of vowels and consonant in a given string.

// input: strinng
// return: Vowel and Consonant count
// vowel: a e i o u
// consonant: all the character
// example : "Hello World" => 3 vowels & 7 Constants

// function calculateVowelAndConsonant(inputString) {
//   inputString = inputString.toLowerCase();
//   // console.log(inputString)
//   inputString = inputString.replace(' ', '');
//   const vowels = "aeiou";
//   const consonants = "bcdfghjklmnpqrstvwxyz";

//   let countVowel = 0;
//   let countConsonant = 0;
//   for(let i =0; i< inputString.length; i++){
//     if(vowels.includes(inputString[i])){
//         countVowel++;
//     }
//     else if (consonants.includes(inputString[i])){
//     // else if (/^[a-z]$/.test(inputString[i])){
//     countConsonant++
//     }
//   }

//   return { countVowel, countConsonant}
// }

// console.log(calculateVowelAndConsonant("RAM GOPAL GUPTA"));

//************************************************************/
// waf that finds all the factors of a given number.
// input: number, positive integer
// return : Factors of a number
// factor: Is a number that divides the given number evenly or exactly, leaving no remainder
// Example : 4: 1, 2, 4 or 14: 1, 2, 7, 14

// function findFactor(num) {
//     if(num < 1 ){
//         throw new Error("Ps enter the Positive no")
//     }
//   let factor = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       factor.push(i);
//     }
//   }
//   return factor;
// }

// console.log(findFactor(14));

//****************************************************** */

// problem statement 13.
// waf that calculates and return the average of a set of numbers.
//Input: Array of positive integer numbers
// return: Average of numbers
// average: Calculated by dividing the total of all the values by the number of values.
// example: [1,2,3]: (1+2+3)/3 = 2

// function findAverage(arr) {
//   // console.log(arr.length)
//   let sum = 0;
//   let average;
//   for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//       // console.log(sum)
//     }
//     average = sum/arr.length
//   return {sum, average}
// }

// console.log(findAverage([1,5,7,35]));

//************************************************ */

// problem statement 14

// waf that calculate and prints the simple intrest on a loan amount
// input:
//Principle amount
// intrest rate(year)
// Time duration(how many years )
// return: intrest amount
// simple intrest:
// (principle*intrest Rate *Time Duration)/100

// example: 1000, 5%, 1Year = (1000*5*1)/100=50

// function calculateSimpleIntrest(amount, intrest, year){
//     // console.log(amount, intrest, year )
//     let simpleIntrest = amount*intrest*year/100;
//     // simpleIntrest = simpleIntrest.toFixed(2)
//     return simpleIntrest
// }

// console.log(calculateSimpleIntrest(20000, 10, 5));

// ******************************************************

// prbllm 15
//waf that tells if the given number is prime or not

// input: A number
// return: true if prime and false if not primme
// prime number: A number that can only be divided by itself and 1 without remainders.
// example: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43
// example of 5 :
// 1-5/1> 0
//2-5/2-> 1, 2, 1 , 0

// function findPrime(num){
//     let result = true;
// for(let i=2; i< num; i++){
//     console.log(num, '%', i, num%i);
//     if(num%i === 0){
//         result = false;
//         break;
//     }
// }
// return result ;
// }

// console.log(findPrime(5))

// function isprime(num) {
//   let result = true;
//   if(num === 2 ){
//     result = true;
//   }
//   else if (num % 2 === 0) {
//     result = false;
//   }
//   if (result === true) {
//     for (let i = 3; i < num; i = i + 2) {
//       console.log(i);
//     }
//   }
//   return result;
// }

// console.log(isprime(2))

//*********************************************************8 */

// problem 16
// waf that counts and return the number of words in a sentence.

// input: A sentence
// return: number of words.

// eaxample :  this is a sentences : 3 spaces, 4 worsds.

// function countWords(sentence){
//     sentence = sentence.trim();
//     // console.log(sentence);
//     const splittedSentence = sentence.split(' ');
//     // console.log(splittedSentence);
//     const nonemptyElement = splittedSentence.filter((element) => element != '' )

//     return nonemptyElement.length;
// }

// console.log(countWords("  Ram Is  A boy   "));

//*********************************************************88 */
// prblm 17
// waf that converts a temperature in celsius to Fahrenheit.

//input: Temperature in Celsius
//return : Fahrenheit
// formula (tem in degree celsius(C)*95+32
// Example:
//27 degree= (27*9/5)+32 = 80.6

// function convertTOFahrenheit(temperatureInCelsius){
// let result = (temperatureInCelsius*9/5)+32;
// result = Math.round(result)
// return result;
// }

// console.log(convertTOFahrenheit(27));

//prblm 18

// Wap that swap two numbers.
// input : two numbers a & b
// Output : Interchange the values of a & b
// examople input a =5, b = 6; return b=5, a=6;

// let a = 5;
// let b = 6;

// let c = b;
// b=a;
// a=c;
// a=a+b
// b=a-b
// a=a-b
// console.log(`swap no a ${a} and b ${b}:`)

//******************************************************/

// prblm 19

// wap that checks if a number is Armstrong or not
//  input : A number
// return : true or false.

// Armstrong: its a number that is equal to the sum of its own digits raised to the power of the number of digits.
// Example : 153= (1^3)(5^3)(3^3)=1+125+27=153 its armstrong number

// function isArmstrong(num){
//     let number = num;
//     const digits = [];
//     while(number > 0 ){
//         let lastDigit = number % 10;
//         number = Math.floor(number / 10)
//         digits.push(lastDigit);
//     }
//     const length = digits.length;
//     let sum = 0;
//     digits.forEach(d => {
//         sum = sum + Math.pow(d, length)
//     })

//     if(sum === num) {
//         return true;
//     }
//     return false;
// }

// console.log(isArmstrong(153));

// prblm 20
// wap that prints numbers from 1 to N, replacing

// multiple of 3 with "Fizz"
// multiple of 5 with "Buzz"
// multiple of both 3 & 5 with "FizzBuzz"
// input: positive number
// example
// 1,2,Fizz,4,Buzz,Fizz......15(Fizz Buzz)

// function isFizzBuzz(inputNumber){
// for(let i =1; i <= inputNumber; i++){
//     if(i % 3 === 0 && i%5 === 0){
// console.log("FizzBuzz");
//     }else if(i % 3 === 0){
//         console.log("Fizz");
//     }else if(i % 5 === 0 ){
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }
// }

// isFizzBuzz(15);

//prblm 21
// wap that prinnts a numbers pyramid
//input: positive number
// output: number pyramid

// function generatePyramid(inputNumber) {
//   for (let i = 1; i <= inputNumber; i++) {
//     let lineContent = "";
//     for (let space = 1; space <= inputNumber - i; space++) {
//       lineContent = lineContent + " ";
//     }
//     for (let count = 1; count <= i; count++) {
//       lineContent = lineContent + count;
//     }

//    for(let reverseCount = i - 1; reverseCount >= 1; reverseCount--){
//     lineContent = lineContent + reverseCount;
//    }
//    console.log(lineContent);
//   }
// }

// generatePyramid(5);

//prblm 22
// wap that count the occurrences of each character in a given string
// example : input : " Ashish Saluja"
// a:3
//s:3
// h:2
// i:1
// "": 1
//l:1
//u:1
// j:1

// function countCharacters(inputString){
//     const result = {};
//     for(let i = 0; i<=inputString.length; i++)
//         console.log(inputString[i]);
// }
// //
// countCharacters("Gopal");   pending

// prblm 23
// wap that checks if a given string is in alphabetical order
// input: A strinng
// output: true / false
// example : "acehkosvz": true "abac": false

// function isStringInAlphabeticalOrder(inputString){
//     inputString = inputString.toLowerCase();
//     inputString = inputString.replace(/ /g, '');
//     for(let i=0; i<inputString.length-1; i++){
//         if(inputString[i] > inputString[i+1]){
//             return false;
//         }

//     }
//     return true;
// }
// console.log(isStringInAlphabeticalOrder("aabc "));

// prblm 24

// wap that checks if two given strings are anagrams of each other
// input: two strings output: false

// Anagram is a word that is formed by rearranging the letters another word
// exAmple : cat, act , rat art

// function areAnagrams(s1, s2){
//     if(s1.length !== s2.length){
// return false;
//     }

//     const charsInS1 = {};
//     for(let char of s1){
//         if(!charsInS1[char]){
//             charsInS1[char] = 0;
//         }
//         charsInS1[char] = charsInS1[char]+1
//     }
//     const charsInS2 = {};
//     for(let char of s2){
//         if(!charsInS2[char]){
//             charsInS2[char] = 0;
//         }
//         charsInS2[char] = charsInS2[char]+1
//     }
//     console.log(charsInS1);
//     for(let key in charsInS1){
//         if(charsInS1[key] !== charsInS2[key]){
//             return false;
//         }
//         console.log("key is", key);
//     }
//     return true;
// }

//     console.log(areAnagrams("ram", "mar"));

//prblm 25
// wap that transpposes a given matrix (swaps rows with columns)
// output: transposed matrix (rows <spap> columns)
// example: input: [[a,b],[c,d],[e,f]] output: [[a,b,c][d,e,f]]

// function transposeMatrix(inputArray){
// // console.log(inputArray);
// const numberOfRows = inputArray.length;
// const numberOfColumns = inputArray[0].length;
// const result = [];

// for(let i = 0; i< numberOfRows; i++){
//     for(let j=0; j<numberOfColumns; j++){
//         console.log(inputArray[i][j]);
//         if(!result[j]) {
//             result[j] = [];
//         }
//         result[j][i] = inputArray[i][j]
//     }
// }
// return result;

// }

// const inputArray = [[3,4],[8,5],[6,9]]

// console.log(transposeMatrix(inputArray));

// wap that checks if a given number is a perfect number
// perfect number: the sum of its proper divisors equals the number itself.
// perfect numbers examples : 6, 28, 496, 8128
// the sum of its proper divisors, excluding itself, equals the number itself.
// 6: 1,2,3 =1+2+3 = true

// function isPerfectNumber(inputNumber){
//     const perfecrNumber = [];
//     let sum = 0;
//     for(let i=1; i< inputNumber; i++){
//         if(inputNumber%i === 0){
//             perfecrNumber.push(i);
//         }
//     }
//     for(let i =0; i<perfecrNumber.length; i++){
//         // console.log(perfecrNumber[i]);
//         sum = sum + perfecrNumber[i];
//     }
//     // if(inputNumber === sum){
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return (inputNumber === sum);
// }

// console.log(isPerfectNumber(28))

// prblm 27
// wap that checks if the provided password is stronng oe not
// minimum 8 char.
// One smallcse char a-z.
//One big char A-Z
//one number 0-9.
//One special Char  - !@

// example: ashiSh!1

// function isStrongPassword(passwordString){
//     passwordString = passwordString.trim();
//     if(passwordString.length < 8){
//         return false;
//     }

//     const lowerCaseCharacter = "abcdefghijklmnopqrstuvwxyz";
//     const upperCaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     const Numbers = "0123456789";
//     const specialChar = "!@#$";

//     let lowerCaseCharacterExists = false;
//     let upperCaseCharacterExists = false;
//     let numbersExists = false;
//     let specialCharExists = false;
//     for(let char of passwordString){
//         if(lowerCaseCharacter.includes(char)){
//             lowerCaseCharacterExists = true;
//             // console.log(lowerCaseCharacterExists);
//         }
//         else if(upperCaseCharacter.includes(char)){
//             upperCaseCharacterExists = true;
//             // console.log(upperCaseCharacterExists);
//         }
//         else if(Numbers.includes(char)){
//             numbersExists = true;
//             // console.log(numbersExists);
//         }
//         else if(specialChar.includes(char)){
//             specialCharExists = true;
//         }
//     }
// // console.log(lowerCaseCharacterExists);
//     if(lowerCaseCharacterExists && upperCaseCharacterExists && numbersExists && specialCharExists){
//         return true;
//     }
//     return false;
// }

// console.log(isStrongPassword("Gogo@11"));

// prblm 28

// wap that multiplies two matrices and returns the result

// input : Two 2-dimensional array which is the multiplication result of 2 matrices

// C[i][j] = A[i][0]*B[0][j]+A[i][1]*B[1][j]+.....+A[i][n-1]*B[n-1][j]
// input A is an M*N matrix(m rows and n columns)
// input B is an n*p matrix (n rows and p columns)
// output: C is an M*P matrix

// function matrixMultiplication(arr1, arr2) {
//   // console.log(arr1, arr2);
//   const rowsInResult = arr1.length;
//   const columnsInResult = arr2[0].length;
//   const rowsInSecondArray = arr2.length;
//   const result = [];
//   for (let i = 0; i < rowsInResult; i++) {
//     for (let j = 0; j < columnsInResult; j++) {
//         let cellVallue = 0;
//       for (let n = 0; n < rowsInSecondArray; n++) {
//         cellVallue = cellVallue + arr1[i][n] * arr2[n][j];
//       }
//       if (!result[i]) {
//         result[i] = [];
//       }
//       result[i][j] = cellVallue;
//     }
//   }
//   return result;
// }
// const firstArray = [
//   [1, 2],
//   [3, 4]
// ];
// const secondArray = [
//   [5, 6],
//   [7, 8]
// ];
// console.log(matrixMultiplication(firstArray, secondArray));

// prblm 29 
// wap that calculates the tip amounts based on the bill total percenteges entered by the user.
//  Output: Different Tip amounts
// input: amount:1000 tip percentage:[5,10,15]
// output: different tip amount
// {5:50, 10:100, 15:150} or [50, 100, 150]

// function calculateTipAmount(baseAmount, tipPercentage){
//     let result = [];
//     for(let i=0; i<tipPercentage.length; i++){
//         const tipAmount = baseAmount * (tipPercentage[i]/100);
//         // tipAmount.toFixed(2);
//         // result.push(tipAmount)
//         const formatter = Intl.NumberFormat("en-IN", {
//             style: "currency",
//             currency: "INR"
//         });
//         result.push(formatter.format(tipAmount));
//     }
//     return result;
// }

// console.log(calculateTipAmount(1000, [5,10,15]));

// prblm 30
// wap to find and count all palidromic substrings within a given string.
// input: string
// output: Array of all palindromic substrings.
// example: 

// function isPalindromes(inputString){
//     for(let i=0; i<= inputString.length/2; i++ ){
//         if(inputString[i] !== inputString[inputString.length-1-i]){
//             return false;
//         }
//     }
//     return true;

// }

// function findPalindromes(inputString){
//     // inputString.slice(1,4)
//     const result = [];
//     for(let i =0; i<inputString.length; i++){
//         for(let j=i+1; j<= inputString.length; j++){
//             const substr = inputString.slice(i,j);
//             if(isPalindromes(substr) && substr.length > 1){
//                 result.push(substr);
//             }
//         }
//     }
//     return result;
// }
// console.log(findPalindromes("radar"));

// prblm 31 
// wap that checks if a given string of parentheses is balanced and well-formed.
// input: A string
// output : true if parentheses is balanced
// false if parentheses is not balanced
// balance parentheses : every opening par. has a corresponding closing parenthesis
// par. must be closed in the correct order
// Examples: [{()}] -> Balanced and [{( -> not balance / unbalanced

const parantheses = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
}


// function isBalanced(inputString){
//     const parantheseArray = [];
//     for(let char of inputString){
//         if(parantheses[char]){
//             parantheseArray.push(char);
//         }
//         else if(char === ')' || char === '}' || char === ']'){
//             const lastOpenParanthesis = parantheseArray.pop();
//             if(parantheses[lastOpenParanthesis] !== char){
//                 return false;
//             }
//         }
//     }
//     // console.log('parantheseArray', parantheseArray);
//      return (parantheseArray.length === 0);

// }

// console.log('{[()]}',isBalanced('{[()]}'));
// console.log('{[(]}',isBalanced('{[(]}'));


//prblm 32 
// wap that finds all occurrences of a given word in a big string.

// Input: Big String , word to find
// output :  Array of all starting indexes where the exists in the big string,

//  exapmles : Big String: "this is a big string with the word big repeated in the big string."
// Word to find : big
// Output: [10, 35, 55]

// const bigString = "this is a big string with the word big repeated in the big string.";
// const wordToFind = "big";

// function findAllOccurences(big, word){
//     const result = [];
//     let index = big.indexOf(word);
//     while(index !== -1){
//         result.push(index);
//         index = big.indexOf(word, index + 1);
//     }
//     console.log(result);
//     console.log(index);
// }

// findAllOccurences(bigString, wordToFind)

//prblm 33 

// wap that generates a random number 
// input: Max Number 
// output : random number between 1 and Max Number

// const maxNumber = 5;

// console.log(Math.floor(Math.random()* maxNumber) + 1);
// let i = 0;
// while(i < 20){
//     console.log(Math.floor(Math.random()* maxNumber) + 1);
//     i++;
    
// }

