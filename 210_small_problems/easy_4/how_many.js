// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

function countOccurrences(arr) {
  var occurences = {};
  var property;
  var i;

  for (i = 0; i < arr.length; i++) {
    var vehicle = arr[i];
    occurences[vehicle] = occurences[vehicle] || 0;
    occurences[vehicle] += 1;
  }

  for (property in occurences) {
    console.log(property + ' => ' + String(occurences[property]));
  }
}


var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2