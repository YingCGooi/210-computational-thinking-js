// Write a function indexOf that accepts two arguments: an Array and a value. The function should return the index of the first element that contains the value, or -1 if the value is not present.

function indexOf(arr, val) {
  var i;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

// Write a function lastIndexOf that accepts two arguments: an Array and a value. The function should return the index of the last element that contains the value, or -1 if the value is not present.

function lastIndexOf(arr, val) {
  var i;

  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1
