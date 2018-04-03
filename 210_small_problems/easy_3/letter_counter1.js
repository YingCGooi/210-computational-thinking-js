// Write a function that takes a string consisting of one or more space separated words, and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

function wordSizes(string) {
  var counts = {};
  var words = string.split(' ')
  var wordSize;
  var i;

  for (i = 0; i < words.length; i++) {
    wordSize = words[i].length;

    if (wordSize === 0) {
      continue;
    }

    counts[wordSize] = counts[wordSize] || 0;
    counts[wordSize] += 1;
  }

  return counts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "6": 1, "2": 1, "4": 1 }
console.log(wordSizes(''));                                            // {}