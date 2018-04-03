var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;
  var len = Object.values(array).length;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / len; // 20 / 2
}

console.log(average(myArray));
// An array property with a key of anything other than a non-negative integer is not counted as part of array's length

// The length of the array is 2 instead of 4

// The expression in the return statement evaluates to 20 / 2 and function returns 10.
