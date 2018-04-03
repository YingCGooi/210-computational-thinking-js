// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

function doubleConsonants(string) {
  var newString = '';
  var i;

  for (i = 0; i < string.length; i++) {
    char = string[i]

    if (isVowel(string[i])) {
      char = char + char;
    } 

    newString += char;
  }

  return newString;
}

function isVowel(char) {
  return char.replace(/[^a-z]/ig, '')
             .replace(/[aeiou]/ig, '')
             .length > 0;
}

var doubleConsonants = s => s.replace(/(?![eiou])[b-z]/gi, '$&$&');
// Nick's solution

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""