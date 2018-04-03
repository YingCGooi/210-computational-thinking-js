// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

function interleave(arr1, arr2) {
  var newArr = [];
  var i;

  for (i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i], arr2[i]);
  }

  return newArr;
}

var interleave = (a, b, result = []) => (
  a.length ? interleave(a.slice(1), b.slice(1), [...result, a[0], b[0]]) : result
); // Nick's solution

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]