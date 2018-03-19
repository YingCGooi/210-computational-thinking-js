function toLowerCase(string) {
  var CONVERSION_OFFSET = 32;
  var i;
  var lowerCaseString = '';
  var charCode = 0;

  for (i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (string[i] >= 'A' && string[i] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    } 

    lowerCaseString += String.fromCharCode(charCode);
  }

  return lowerCaseString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"