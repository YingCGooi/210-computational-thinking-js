function swapEnds(arr) {
  var first = arr[0];
  var last = arr[arr.length - 1];

  arr[0] = last;
  arr[arr.length - 1] = first;
  return arr;
}

arr = [1, 2, 3, 4];
console.log(swapEnds(arr)); // logs [ 4, 2, 3, 1 ]
console.log(swapEnds(arr)); // logs [ 1, 2, 3, 4 ]