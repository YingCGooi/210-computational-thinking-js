// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

function wordSizes(string) {
  var counts = {};
  var words = string.split(' ');
  var i;

  for (i = 0; i < words.length; i++) {
    wordLength = removeNonLetters(words[i]).length

    if (wordLength === 0) {
      continue;
    }

    counts[wordLength] = counts[wordLength] || 0;
    counts[wordLength] += 1;
  }

  return counts;
}

function removeNonLetters(string) {
  return string.replace(/[^a-z]/ig, '');
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}