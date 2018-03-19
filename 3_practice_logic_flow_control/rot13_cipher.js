function rot13(string) {
  var OFFSET = 26
  var i;
  var charCode;
  var newString = ''

  for (i = 0; i < string.length; i++) {
    var currentChar = string[i];
    charCode = currentChar.charCodeAt(0);

    if (!currentChar.match(/[a-z]/i)) {
      newString += currentChar;
      continue;
    }

    charCode += 13
    
    if (isCharCodeOverUpperCase(currentChar, charCode) || isCharCodeOverLowerCase(currentChar, charCode)) {
      charCode -= OFFSET;
    }
    
    newString += String.fromCharCode(charCode);
  }

  return newString;
}

function isCharCodeOverUpperCase(currentChar, charCode) {
  return currentChar === currentChar.toUpperCase() && charCode > 90;
}

function isCharCodeOverLowerCase(currentChar, charCode) {
  return currentChar === currentChar.toLowerCase() && charCode > 122;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.