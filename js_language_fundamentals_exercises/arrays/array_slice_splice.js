// In this exercise, you will implement your own versions of the Array.prototype.slice and Array.prototype.splice methods according to the following specifications.

function slice(array, begin, end) {
  var i;
  var sliced = [];

  begin = Math.min(array.length, begin);
  end = Math.min(array.length, end);

  for (i = begin; i < end; i++) {
    sliced.push(array[i]);
  }

  return sliced;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]

console.log('========================')


// Splice

function splice(array, start, deleteCount, ...items) {
  start = Math.min(array.length, start);
  deleteCount = Math.min(array.length - start, deleteCount);

  var secondSlice = array.slice(start + deleteCount);

  array.length = start;
  array.push(...items);
  array.push(...secondSlice);

  return array.slice(start, start + deleteCount);;
}

console.log(splice([1, 2, 3, 4, 5], 2, 2));
// [1,2,3,4,5],1,2 => [1,2,5]
console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]