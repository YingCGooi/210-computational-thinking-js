// The following program is expected to log a multiplication table for the numbers from 1 to 10 to the console. Read through the code shown below. Will it produce the expected result? Why or why not?

var row;
var i;
var j;

function padLeft(number) {
  var stringNumber = String(number);
  return stringNumber.length <= 1 ? ' ' + stringNumber : stringNumber;
}

for (i = 1; i < 10; i += 1) {
  row = '';

  for (j = 1; j <= 10; j += 1) {
    // ' 1  2  3  4  5  6  7  8  9 10'
    row += padLeft(i * j) + ' ';
  }

  console.log(row + '\n');
}

// The code generates the multiplication table for only the numbers from 1 to 9.

for (i = 1; i <= 10; i += 1) {
  row = '';
  for (j = 1; j <= 10; j += 1) {
    row += padLeft(i * j) + ' ';
  }

  console.log(row + '\n');
}

