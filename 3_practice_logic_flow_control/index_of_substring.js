function indexOf(firstString, secondString) {
  var i;
  var j;
  var subString;
  var limit = firstString.length - secondString.length;

  for (i = 0; i <= limit; i++) {
    subString = '';

    for (j = i; j < i + secondString.length; j++) {
      subString += firstString[j];
    } 

    if (secondString === subString) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  var i;
  var j;
  var subString;
  var limit = firstString.length - secondString.length; 

  for (i = limit; i >= 0; i--) {
    subString = '';

    for (j = i; j <= i + secondString.length - 1; j++) {
      subString += firstString[j];
    }

    if (subString === secondString) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  var i;
  var j;
  var subString = '';

  for (i = firstString.length - 1; i >= 0; i--) {
    for (j = i; j < firstString.length; j++) {
      subString += firstString[j];

      if (indexOf(subString, secondString) !== -1) {
        return i;
      }
    }
  }

  return -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

// i at index 11 -> char at idx 11
// i at index 10 -> char at idx 10, 11
// i at index 9  -> char at idx 9, 10, 11

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1