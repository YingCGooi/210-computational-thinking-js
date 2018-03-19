function gcd(num1, num2) {
  var dividend = Math.max(num1, num2);
  var divisor = Math.min(num1, num2);
  var remainder = dividend % divisor;

  if (remainder === 0) {
    return divisor;
  }

  while (remainder !== 0) {
    remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return dividend;
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, (a - b*Math.floor(a/b)));
}

function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

console.log(gcd(12, 4));  // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
console.log(gcd(48, 18)); // 6
console.log(gcd(4, 12)); // 4
console.log(gcd(10, 15)); // 5
console.log(gcd(2, 9));   // 1
console.log(gcd(18, 48)); // 6

console.log(gcd(12, gcd(4, 8))); // 4
gcd(gcd(12, 4), 8);  // 4

// 48, 18
// dividend, divisor, quotient
// remainder 12 = 48 % 18
// remainder 6 = 18 % 12
// remainder 0 = 12 % 6
// remainder = dividend % divisor
// return dividend if remainder is 0
