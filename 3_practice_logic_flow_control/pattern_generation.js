function generatePattern(n) {
  var numberString;
  var i;
  var j;
  var maxLength;
  var lastRowString = '';

  for (i = 1; i <= n; i += 1) {
    lastRowString += String(i);
  }

  maxLength = lastRowString.length;

  for (i = 1; i <= n; i++) {
    numberString = '';

    for (var j = 1; j <= i; j++) {
      numberString += String(j);
    }

    console.log(numberString + '*'.repeat(maxLength - numberString.length));
  }
}

// We must output n lines of n characters
// if the line number is i, then this line should have the digits from 1 to i, followed by * characters to fill out the remaining length of the n characters.

generatePattern(20);
// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567