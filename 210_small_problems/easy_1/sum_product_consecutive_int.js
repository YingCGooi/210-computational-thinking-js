// Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

function sumIntegers(limit) {
  var i;
  var sum = 0;

  for (i = 1; i <= limit; i ++) {
    sum += i;
  }

  return sum;
}

function productIntegers(limit) {
  var i;
  var product = 1;

  for (i = 1; i <= limit; i++) {
    product *= i;
  }

  return product;
}


function sumArray(arr) {
  return arr.reduce(
    function(acc, curr) {
      return acc + curr;
    }
  );
}

function productArray(arr) {
  return arr.reduce(
    function(acc, curr) {
      return acc * curr;
    }
  );
}

console.log(sumArray([1, 2, 3, 4]));
console.log(productArray([1, 2, 3, 4]));

var limit = Number(prompt('Please enter an integer greater than 0:'));
var mode = prompt('Enter "s" to compute the sum, or "p" to compute the products.')

if (mode === 's') {
  console.log(`The sum of the integers between 1 and ${limit} is ${sumIntegers(limit)}.`);
} else if (mode === 'p') {
  console.log(`The product of the integers between 1 and ${limit} is ${productIntegers(limit)}.`);
} else {
  console.log('Oops. Unknown operation.');
}