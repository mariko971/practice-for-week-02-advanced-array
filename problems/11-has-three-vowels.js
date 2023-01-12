/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

// let hasThreeVowels = function (string) {
//   let stringArr = string.split("");
//   let vowels = "aeiou";
//   let count = [];

//   stringArr.map(function (letter) {
//     if (vowels.includes(letter) && !count.includes(letter)) {
//       count.push(letter);
//     }
//   });
//   return count.length >= 3;
// };

// Your code here
let hasThreeVowels = function (string) {
  let stringArr = string.split("");
  let vowels = "aeiou";
  let count = [];

  stringArr.forEach(function (letter) {
    if (vowels.includes(letter) && !count.includes(letter)) {
      count.push(letter);
    }
  });
  return count.length >= 3;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hasThreeVowels;
} catch (e) {
  module.exports = null;
}
