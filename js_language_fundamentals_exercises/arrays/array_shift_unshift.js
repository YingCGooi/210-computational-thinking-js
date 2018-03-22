// In this exercise, you will implement your own versions of the Array.prototype.shift and Array.prototype.unshift methods. These methods manipulate the contents of an array starting from the first index.

// The shift method removes the first element from an array and returns that element; if the array is empty, shift returns undefined. The unshift method adds one or more elements to the start of an array and returns the new length of the array. Both methods mutate the original array.

function shift(arr) {
  var firstVal = arr[0];
  var i;

  for (i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  if (arr.length > 0) {
    arr.length = arr.length - 1;
  }

  return firstVal;
}

function unshift(arr) {
  var i;

  for (i = arguments.length - 1; i >= 0; i--) {
    arr[i + arguments.length - 1] = arr[i];
  }

  for (i = 1; i < arguments.length; i++) {
    arr[i - 1] = arguments[i];
  }

  return arr.length;
}

// Provided solution
function shift(array) {
  var result;

  if (array.length !== 0) {
    result = array.splice(0, 1).pop();
  }

  return result;
}

function unshift(array) {
  var i;
  for (i = 1; i < arguments.length; i += 1) {
    array.splice(i - 1, 0, arguments[i]);
  }

  return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]