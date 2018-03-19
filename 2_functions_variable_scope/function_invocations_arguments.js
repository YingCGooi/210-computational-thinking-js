function startle() {
  console.log('Yikes!');
}

startle();

var surprise = startle;
surprise();

function takeTwo(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b);
}

takeTwo(1);
// 1. We are allowed to call a function with the number of arguments passed in less than what's specified in the function's parameters
// 2. The argument that wasn't provided will have the value undefined.
// 3. NaN results from a value coercion when a number and `undefined` are added.
// 4. Additional arguments passed in is allowed, JS will ignore them.