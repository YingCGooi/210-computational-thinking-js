function findFibonacciIndexByLength(numDigits) {
  var first = 1;
  var second = 1;
  var index = 2;

  do {
    temp = second;
    second = first + second;
    first = temp;
    index += 1;
  } while (String(second).length < numDigits)

  return index;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74