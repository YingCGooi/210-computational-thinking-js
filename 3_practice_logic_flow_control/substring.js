function substr(string, start, length) {
  var i;
  var subString = '';

  if (length === undefined) {
    length = string.length;
  }

  if (start < 0) {
    start = string.length + start;
  }

  for (i = start; i < maxLength(string, start, length); i++) {
    subString += string[i];
  }

  return subString;
}

function maxLength(string, start, length) {
  return Math.min(start + length, string.length);
}

var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
console.log(substr(string, 2, 5));      // "llo w"
console.log(substr(string, 1));