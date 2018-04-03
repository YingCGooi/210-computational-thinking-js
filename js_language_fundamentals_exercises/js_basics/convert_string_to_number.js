// For this exercise we're going to learn more about type conversion by implementing our own parseInt function that converts a string of numeric characters (including an optional plus or minus sign) to a number.

// The function takes a string of digits as an argument, and returns the appropriate number. Do not use any of the built-in functions for converting a string to a number type.

var DIGITS = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
}

function stringToInteger(string) {
  var i;
  var count = 0;

  for (i = 0; i < string.length; i++) {
    count = count * 10 + DIGITS[string[i]]
  }

  return count;
}

// console.log(charToDigit);
console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570