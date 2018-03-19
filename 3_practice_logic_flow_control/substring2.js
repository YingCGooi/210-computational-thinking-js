function substring(string, start, end) {
  var i;
  var subString = '';

  if (start > end) {
    var temp = end;
    end = start;
    start = temp;
  }

  if (start === end) {
    return '';
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (isString(start) || isString(end)) {
    return string;
  }

  if (end > string.length || end === undefined) {
    end = string.length;
  }

  for (i = start; i < end; i++) {
    subString += string[i];
  }

  return subString;
}

function isString(arg) {
  return typeof(arg) === 'string';
}

var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"