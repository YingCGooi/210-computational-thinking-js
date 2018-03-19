function logMultiples(number) {
  var multiple = Math.floor(100 / number) * number;

  for (i = multiple; i >= number; i -= number) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logMultiples(17);
// output (5x, 3x and 1x)


logMultiples(21);
// output (3x and 1x)
