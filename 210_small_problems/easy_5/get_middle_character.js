// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

function centerOf(string) {
  var middle = Math.floor(string.length / 2);

  if (string.length % 2 === 0) {
    return string[middle - 1] + string[middle];
  } else {
    return string[middle];
  }
}

function centerOf(str) {
  start = Math.ceil(str.length / 2) - 1;
  end = Math.floor(str.length / 2) + 1;

  return str.substring(start, send);
} // Karl's solution


console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"