// Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

function union(arr1, arr2) {
  var newArr = [];

  for (i = 0; i < arguments.length; i += 1) {
    copyNonDupsTo(newArr, arguments[i]);
  }

  return newArr;
}

function copyNonDupsTo(newArr, arr) {
  arr.forEach( val => {
    if (newArr.indexOf(val) < 0)  {
      newArr.push(val);
    }
  });
}

console.log(union([1, 3, 5, 3], [3, 6, 9]));    // [1, 3, 5, 6, 9]