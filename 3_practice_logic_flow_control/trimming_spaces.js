function trim(string) {
  var i;
  var stripped = '';
  var spaceBegCount = 0;
  var spaceEndCount = 0;

  for (i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      break;
    }

    spaceBegCount += 1;
  }

  for (i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      break;
    }

    spaceEndCount += 1;
  }

  for (i = spaceBegCount; i < (string.length - spaceEndCount); i++) {
    stripped += string[i];
  }

  return stripped;
}



console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""