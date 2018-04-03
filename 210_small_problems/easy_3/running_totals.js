// Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.

function runningTotal(arr) {
  var i;
  var runningTotals = [];
  var sum = 0;

  for (i = 0; i < arr.length; i++) {
    runningTotals.push(sum += arr[i]);
  }

  return runningTotals;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// Further Exploration

function runningTotal(arr) {
  var sum = 0;
  return arr.map( n => sum += n );
}