// In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

// You will learn more about converting strings to numbers by writing a function that takes a positive integer or zero, and converts it to a string representation.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function integerToString(n) {
  var numberArr = [];
  var base = 10;
  var exp = 0;
  var i;
  
  var digit;
  var digitString = '';

  while (Math.pow(base, exp) < n) {
    exp += 1;
  }
  
  if (exp === 0) {
    return DIGITS[n]; 
  }
  
  for (i = (exp - 1); i >= 0; i--) {
    digit = Math.floor(n / (Math.pow(base, i)));
    digitString += DIGITS[digit];
    n = n % (Math.pow(base, i));
  }
    
  return digitString;
}

function integerToString(num, result = '') {
  result = '0123456789'[num % 10] + result;
  return (num < 10 ? result : integerToString(Math.floor(num / 10), result))
} // Nick's solution

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"