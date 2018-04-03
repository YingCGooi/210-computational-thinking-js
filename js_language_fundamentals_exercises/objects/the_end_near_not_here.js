// The penultimate function takes a string as an argument and returns the next-to-last word in the string. The function assumes that "words" are any sequence of non-whitespace characters. The function also assumes that the input string will always contain at least two words. The penultimate function in the example below does not return the expected result. Run the code below, check the current result, identify the problem, explain what the problem is, and provide a working solution.

function penultimate(string) {
  // return string.split(' ').slice(-2, -1)[0];
  var words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

// The problem is that, when using bracket notation in the array returned by string.split, the number within the brackets have to be a non-negative integer in order to retrieve an element within the array.
// Using negative index to access an array usually returns undefined.
// In JS, arrays are objects. By using -1 with bracket notation, we are telling JS to access the property that has the key '-1' and return that property's value.

// The main difference with slice is thatwe must provide an endingIndex as a second argument.





