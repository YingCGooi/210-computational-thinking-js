// Write a function named slice that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array.

function slice(arr, start, end) {
  var newArr = [];
  var i;

  for (i = start; i < end; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                     // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]


// Write a function named splice that accepts three arguments: an Array, a start index, and the number of values to remove. 

// The function should remove values from the original Array, starting with the first index and removing the specified number of values. The function should return the removed values in a new Array.
function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

function splice(arr, start, numValues) {
  var removedValues = [];
  var i;

  for (i = start; i < arr.length; i++) {
    if (i < start + numValues) {
      push(arr[i], removedValues);
    }

    arr[i] = arr[i + numValues];
  }

  arr.length = arr.length - numValues;
  return removedValues;
}

// var count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));  // [ 3, 4, 5, 6, 7 ]
// console.log(count);     // [ 1, 2, 8 ]

var arr = [1, 2, 3, 4, 5, 6];
console.log(splice(arr, 3, 1)); // 4
console.log(arr); // [1, 2, 3, 5, 6]

// Write a function named concat that accepts two Array arguments. The function should return a new Array that contains the values from each of the original Arrays.

function concat(arr1, arr2) {
  var newArr = [];
  var i;

  for (i = 0; i < arr1.length; i++) {
    push(newArr, arr1[i]);
  }

  for (i = 0; i < arr2.length; i++) {
    push(newArr, arr2[i]);
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

// Write a function named join that accepts two arguments: an Array and a String. The function should coerce each value in the Array to a String, and then join those values together using the second argument as a separator. You may assume that a separator will always be passed.

function join(arr, separator) {
  var joined = '';
  var i;

  for (i = 0; i < arr.length; i++) {
    joined += String(arr[i]);

    if (i < arr.length - 1) {
      joined += separator;
    }
  }

  return joined;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'