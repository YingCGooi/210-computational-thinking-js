// Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

function logEven(start, end) {
  var i;

  if (start % 2 === 1) {
    start += 1;
  }

  for (i = start; i <= end; i += 2) {
    console.log(i);
  }
}

logEven(1, 99);