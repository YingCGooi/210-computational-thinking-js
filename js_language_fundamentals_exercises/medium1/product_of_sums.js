// The productOfSums function shown below is expected to return the product of the sums of two arrays of numbers. Read through the following code. Will it produce the expected result? Why or why not?

function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2); // returns NaN due to multiplication of undefined values
  return result;
}

function total(numbers) {
  var sum; // the type of sum needs to be specified by initializing it to a number value
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i]; // return NaN (undefined + numbers[i] evaluates to NaN)
  }

  sum; // return keyword needs to be specified
  // thus returns undefined
}

console.log(productOfSums([1,2,3], [4,5,6]));