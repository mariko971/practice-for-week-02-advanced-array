/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

// let longestWord = function (sentence) {
//   let sentArr = sentence.split(" ");
//   let longestWord = "";

//   sentArr.forEach(function (word) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   });

//   return longestWord;
// };

// Your code here
let longestWord = function (sentence) {
  let sentArr = sentence.split(" ");
  let longestWord = "";

  sentArr.map(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }, "");

  return longestWord;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = longestWord;
} catch (e) {
  module.exports = null;
}
