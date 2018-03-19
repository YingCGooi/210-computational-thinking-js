function repeat(string, times) {
  var repeatedString = '';
  var i;

  if (!isPositiveInteger(times)) {
    return undefined;
  }

  for (i = 0; i < times; i++) {
    repeatedString += string;
  }

  return repeatedString;
}

function isPositiveInteger(value) {
  return Number(value) === value && value >= 0;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined
