// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

// var num1 = prompt('Enter the 1st number');
// var num2 = prompt('Enter the 2nd number');
// var num3 = prompt('Enter the 3rd number');
// var num4 = prompt('Enter the 4th number');
// var num5 = prompt('Enter the 5th number');
// var num6 = prompt('Enter the last number');

// var firstFive = [num1, num2, num3, num4, num5];

// if (firstFive.includes(num6)) {
//   console.log(`The number ${num6} appears in [${firstFive}].`);
// } else {
//   console.log(`The number ${num6} does not appear in [${firstFive}].`);
// }

// Further Exploration

function includesGreaterThan(array, val) {
  var i;

  for (i = 0; i < array.length; i++) {
    if (array[i] > val) {
      return true;
    }
  }

  return false;
}

console.log(includesGreaterThan([1, 2, 3, 4, 5], 16));
console.log([1,2,3].some(x => x > 2));