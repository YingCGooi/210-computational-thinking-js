function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  } // if number = 2, the loop will not executes

  return true;
}

// further exploration
function isPrime(number) {
  var divisor;

  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  divisor = 3;

  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 2;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false