// Write a function that creates and returns a new array from its array argument. The new array should contain all values from the argument array whose positions have an odd index.

function oddElementsOf(arr) {
  var newArr = [];
  var i;

  for (i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }

  return newArr;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]


// Write a function that takes two arrays and returns a new array whose even positions come from the first array, and whose odd positions come from the second array. Assume that both arrays have equal length.

function combinedArray(even, odd) {
  var i;
  var combined = [];
  var length = even.length;

  for (i = 0; i < even.length; i++) {
    combined.push(even[i]);
    combined.push(odd[i]);
  }

  return combined;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

// Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.

function originalReverse(arr) {
  return arr.concat(arr.slice().reverse());
}

console.log(originalReverse(digits));

// Use the array sort method to create a function that takes an array of numbers and returns a new array of the numbers sorted in descending order. Do not alter the original array.

function sortDescending(arr) {
  var arrCopy = arr.slice();
  return arrCopy.sort(function (a, b) { return b - a; });
}

var array = [23, 4, 16, 42, 8, 15];
var result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15

// Write a function that takes an array of arrays as an argument, and returns a new array that contains the sums of each of the sub-arrays.

function matrixSums(arr) {
  var sums = [];

  arr.forEach(function(subArr) {
    sums.push(
      subArr.reduce(function(acc, num) {
        return acc + num;
      })
    ); 
  });

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  var uniqArr = [];
  var i;
  var j;
  var include = false;

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < uniqArr.length; j++) {
      if (uniqArr[j] === arr[i]) {
        include = true;
      }
    }

    if (!include) {
      uniqArr.push(arr[i]);
    }

    include = false;
  }

  return uniqArr;
}

function uniqueElements(arr) {
  var uniques = [];
  var len = arr.length;
  var i;

  for (i = 0; i < len; i++) {
    if (uniques.indexOf(arr[i]) === -1) {
      uniques.push(arr[i]);
    }
  }

  return uniques;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

// Write a function that takes a sorted array of integers as an argument, and returns an array that includes all the missing integers (in order) between the first and last elements of the argument.

function missing(arr) {
  var min = arr[0];
  var max = arr[arr.length - 1];
  var missingIntArr = [];
  var i;

  for (i = min; i < max; i++) {
    if (arr.indexOf(i) === -1) {
      missingIntArr.push(i);
    }
  }

  return missingIntArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []