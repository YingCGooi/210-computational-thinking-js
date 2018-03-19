function average(arr) {
  return sum(arr) / arr.length;
}

function sum(arr) {
  var total = 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    total += arr[i];
  }
  return total;
}

var result = average([3, 5, 6, 7, 8]);
console.log(result);

temperatures = [35, 32, 31, 40, 49];
console.log(average(temperatures));