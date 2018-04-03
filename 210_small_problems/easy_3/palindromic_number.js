// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

function isPalindrome(string) {
  return (string === [...string].reverse().join(''));
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

// Further Exploration
// The solution will not work. When a number begins one or more 0s, it will be converted to an octal number.
