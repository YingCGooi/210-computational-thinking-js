function crunch(str) {
  var i;
  var newString = '';

  for (i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      newString += str[i];
    }
  }

  return newString;
}

function crunch(string) {
  return string.replace(/(.)\1+/g, '$1')
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""