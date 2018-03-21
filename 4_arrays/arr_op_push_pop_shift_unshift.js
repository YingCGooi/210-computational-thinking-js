// Array Operation
// JS has an Array global object.
// This object has something called a prototype object.
// The prototype object defines the methods for Arrays.

// - All JS arrays inherit from the prototype object.


// Write a function named push that accepts two arguments: an Array and any other value. The function should append the second argument to the end of the Array, and return the new length of the Array.

var count = [0, 1, 2];

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}


console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

// Write a function named pop that accepts one argument: an Array. The function should remove the last element from the array and return it.

var count = [1, 2, 3];

function pop(arr) {
  var newLength = arr.length - 1;
  var lastVal = arr[newLength];
  arr.length = newLength;

  return lastVal;
}

console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]

// Write a function named unshift that accepts two arguments: an Array and a value. 

// The function should insert  the value at the beginning of t he Array , and return the new length of the array. You will need a for loop for this problem. 

var count = [1, 2, 3];

function unshift(arr, val) {
  var i;

  for (i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = val;
  return arr.length;
}

console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]

// Write a function named shift that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

function shift(arr) {
  var i;
  var firstVal = arr[0];

  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1
  return firstVal;
}

var count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]