// The getSelectedColumns function selects and extracts specific columns to a new array. Currently, the function is not producing the expected result. Go over the function and the sample runs shown below. What do you think the problem is?

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) { // the `length` variable in the first (outer) loop is actually being reassigned. The behavior is caused by the fact that 'blocks' do not create a new scope in JS.
      // After hoisting, the two declarations become one and the same, making the second a reassignment.
      if (!result[j]) {
        result[j] = [];
      }
      // cols = [0, 2]
      // j = 0, i = 0 => result[0][0] = numbers[0][0]
      // j = 1, i = 0 => result[1][0] = numbers[0][2]

      // j = 0, i = 1 => result[0][1] = numbers[1][0]
      // j = 1, i = 1 => result[1][1] = numbers[1][2]

      // j = 0, i = 2 => result[0][2] = numbers[2][0]
      // j = 1, i = 2 => result[1][2] = numbers[2][2]

      result[j][i] = numbers[i][cols[j]];

    }
  }

  return result;
}

// The problem is that the length variable is reassigned a new value in the second loop

// given the following arrays of number arrays
// array1[1][0]
var array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]
