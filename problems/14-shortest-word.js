/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

// let shortestWord = function (sentence) {
//   let sentArr = sentence.split(" ");
//   let shortest = sentArr[0];

//   sentArr.map(function (word) {
//     if (word.length <= shortest.length) {
//       shortest = word;
//     }
//   });

//   return shortest;
// };

// Your code here
let shortestWord = function (sentence) {
  let sentArr = sentence.split(" ");
  let shortest = sentArr[0];

  sentArr.forEach(function (word) {
    if (word.length <= shortest.length) {
      shortest = word;
    }
  });

  return shortest;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
