/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/
// Helper function to repeat letters if word doesnt end with a vowel.
let repLetters = function (word) {
  let index = null;
  let vowels = "aeiou";
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      index = i;
      break;
    }
  }
  return word + word.slice(index);
};

let repeatingTranslate = function (sentence) {
  let sentArr = sentence.split(" ");
  let newSent = [];

  sentArr.forEach(function (word) {
    if (word.length < 3) {
      newSent.push(word);
    } else {
      newSent.push(translateWord(word));
    }
  });

  return newSent.join(" ");
};

let translateWord = function (word) {
  let wordLength = word.length;
  let vowels = "aeiou";
  if (vowels.includes(word[wordLength - 1])) {
    return word + word;
  } else {
    return repLetters(word);
  }
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = repeatingTranslate;
} catch (e) {
  module.exports = null;
}
