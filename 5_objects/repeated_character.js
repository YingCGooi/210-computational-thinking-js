// Implement a function that takes a String as an argument and returns an object that contains a count of the repeated characters.

function repeatedCharacters(str) {
  var lowerCase = str.toLowerCase();
  var chars = lowerCase.split('');
  var sortedChars = chars.sort();
  var i;
  var counts = {};

  for (i = 0; i < sortedChars.length; i++) {
    var char = sortedChars[i];
    var nextChar = sortedChars[i + 1];

    if (counts[char]) {
      counts[char] += 1;
    } else if (char === nextChar && !counts[char]) {
      counts[char] = 1;
    }
  }

  return counts;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }