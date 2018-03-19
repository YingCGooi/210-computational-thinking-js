function splitString(string, delimiter) {
  var i;
  var splitted = '';

  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  for (i = 0; i < string.length; i++) {
    if (delimiter === '') {
      console.log(string[i]);
      continue;
    } else if (string[i] !== delimiter) {
      splitted += string[i];
    } else {
      console.log(splitted);
      splitted = '';
    }
  }

  if (splitted) {
    console.log(splitted);
  }
}

splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// // logs:
// // hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello