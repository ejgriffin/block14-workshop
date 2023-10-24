// Workshop 14: uncomment sections of code to run

//Only Odds:
//Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array.
//If there is only one odd number in the array, return an array with that single value.

// const numArr1 = [2, 4, 6, 8, 11, 20, 15, 22];
// const numArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numArr3 = [70, 42, 55, 81, 21, 91, 34];
// const numArr4 = [2, 4, 6, 8, 10, 11, 12];

// for (i = 0; i <= numArr1.length - 1; i++) {
//   if (numArr1[i] % 2 !== 0) {
//     console.log(numArr1[i]);
//   }
// }
// printed = [11,15]

// for (i = 0; i <= numArr2.length - 1; i++) {
//   if (numArr2[i] % 2 !== 0) {
//     console.log(numArr2[i]);
//   }
// }
// printed = [1, 3, 5, 7, 9];

// for (i = 0; i <= numArr3.length - 1; i++) {
//   if (numArr3[i] % 2 !== 0) {
//     console.log(numArr3[i]);
//   }
// }
// printed = [55, 81, 21, 91];

// for (i = 0; i <= numArr4.length - 1; i++) {
//   if (numArr4[i] % 2 !== 0) {
//     console.log(numArr4[i]);
//   }
// }
// printed = [11]

//Vowels vs Consonants:

//Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.
//create variables for each string.
//Define vowel count and consonant count in separate variables
//create For loop that counts each variable
//Log a string that says "(string) has (#) consonants and (#) vowels"

// const lowcaseString1 = "hello";
// let vowelNum = 0;
// let consNum = 0;
// const vowels = ["a", "e", "i", "o", "u"];

// for (let i = 0; i < lowcaseString1.length; i++) {
//   if (vowels.includes(lowcaseString1[i])) {
//     vowelNum += 1;
//   } else {
//     consNum += 1;
//   }
// }

// console.log(
//   `${lowcaseString1} has ${vowelNum} vowels and ${consNum} consonants.`
// );
// printed = hello has 2 vowels and 3 consonants.

// const lowcaseString2 = "ukelele";
// let vowelNum = 0;
// let consNum = 0;
// const vowels = ["a", "e", "i", "o", "u"];

// for (let i = 0; i < lowcaseString2.length; i++) {
//   if (vowels.includes(lowcaseString2[i])) {
//     vowelNum += 1;
//   } else {
//     consNum += 1;
//   }
// }

// console.log(
//   `${lowcaseString2} has ${vowelNum} vowels and ${consNum} consonants.`
// );
// printed = ukelele has 4 vowels and 3 consonants.

// const lowcaseString3 = "awesome";
// let vowelNum = 0;
// let consNum = 0;
// const vowels = ["a", "e", "i", "o", "u"];

// for (let i = 0; i < lowcaseString3.length; i++) {
//   if (vowels.includes(lowcaseString3[i])) {
//     vowelNum += 1;
//   } else {
//     consNum += 1;
//   }
// }
// console.log(
//   `${lowcaseString3} has ${vowelNum} vowels and ${consNum} consonants.`
// );
// printed = awesome has 4 vowels and 3 consonants.

// const lowcaseString4 = "onomonopia";
// let vowelNum = 0;
// let consNum = 0;
// const vowels = ["a", "e", "i", "o", "u"];

// for (let i = 0; i < lowcaseString4.length; i++) {
//   if (vowels.includes(lowcaseString4[i])) {
//     vowelNum += 1;
//   } else {
//     consNum += 1;
//   }
// }
// console.log(
//   `${lowcaseString4} has ${vowelNum} vowels and ${consNum} consonants.`
// );
// printed = onomonopia has 6 vowels and 4 consonants.

// const lowcaseString5 = "textbook";
// let vowelNum = 0;
// let consNum = 0;
// const vowels = ["a", "e", "i", "o", "u"];

// for (let i = 0; i < lowcaseString5.length; i++) {
//   if (vowels.includes(lowcaseString5[i])) {
//     vowelNum += 1;
//   } else {
//     consNum += 1;
//   }
// }
// console.log(
//   `${lowcaseString5} has ${vowelNum} vowels and ${consNum} consonants.`
// );

// printed = textbook has 3 vowels and 5 consonants.

//Reverse Array:
//Create a series of Arrays from the chart in Workshop 14.
//With a for loop, create a JavaScript code that creates a new array from the numbers in the previous array in reverse order.

// const newArr1 = [1, 2, 3];

// for (let i = newArr1.length - 1; i >= 0; i--) {
//   console.log(newArr1[i]);
// }
// printed = [3, 2, 1]

// const newArr2 = [1, 3, 5, 7, 9, 11];

// for (let i = newArr2.length - 1; i >= 0; i--) {
//   console.log(newArr2[i]);
// }
//printed = [11, 9, 7, 5, 3, 1];

// const newArr3 = [20, 50, 30, 60, 200];

// for (let i = newArr3.length - 1; i >= 0; i--) {
//   console.log(newArr3[i]);
// }
//printed = [200, 60, 30, 50, 20];

// const newArr4 = [1, -1, 2, -3, 5, -8, 13];

// for (let i = newArr4.length - 1; i >= 0; i--) {
//   console.log(newArr4[i]);
// }
// printed = [13, -8, 5, -3, 2, -1, 1]

// FizzBuzz:

// Create a JavaScript code that prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// for (i = 0; i <= 100; i++) {
//   if ([i] % 15 == 0) {
//     console.log("FizzBuzz");
//   } else if ([i] % 3 == 0) {
//     console.log("Fizz");
//   } else if ([i] % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
