// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.
var i;

for (i = 1; i <= 99; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// further exploration
function logOdd(start, end) {
  if (start % 2 === 0) {
    start += 1;
  }

  for (i = start; i <= end; i += 2) {
    console.log(i);
  }
}

logOdd(1, 99);
logOdd(0, 99);
logOdd(-50, 30);
logOdd(30, 10);