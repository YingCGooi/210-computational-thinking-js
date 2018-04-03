// Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"


// if an empty string is supplied as an argument to `split()`, the string would be split into an array of characters instead of words