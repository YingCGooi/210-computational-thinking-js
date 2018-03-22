// In this exercise, you will implement your own version of the Array.prototype.reverse method. Your implementation should differ from the built-in method in the following two ways:

// It should accept either a string or an array as an argument.
// It should return a new string or array.

function reverse(inputForReversal) {
  var str = '';
  var arr = [];
  var element;
  var i;

  for (i = inputForReversal.length - 1; i >= 0; i--) {
    element = inputForReversal[i];

    if (isString(inputForReversal)) {
      str += element;
    } else if (Array.isArray(inputForReversal)) {
      arr.push(element);
    }
  }

  return (isString(inputForReversal)) ? str : arr;
}

function isString(input) {
  return typeof(input) === 'string';
}

// Buggy
function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  var reversed = [];
  var length = inputForReversal.length;
  var i;

  for (i = 0; i < length; i += 1) {
    reversed[length - i - 1] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  var stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []
