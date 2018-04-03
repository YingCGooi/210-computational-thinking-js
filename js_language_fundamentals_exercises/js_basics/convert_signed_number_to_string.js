// In the previous exercise, you reimplemented a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. You may, however, use the integerToString function from the previous exercise.

function integerToString(num, result = '') {
  result = '0123456789'[num % 10] + result;
  return (num < 10 ? result : integerToString(Math.floor(num / 10), result))
} // Nick's solution

function signedIntegerToString(number) {
  if (number < 0) {
    return '-' + integerToString(-number);
  } else if (number > 0) {
    return '+' + integerToString(number);
  }

  return 0;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"