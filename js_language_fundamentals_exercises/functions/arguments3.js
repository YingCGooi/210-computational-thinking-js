var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a); // [ 1, 2, 10 ]

// In JS, when passing objects (such as arrays), the value is the reference to the object

// When `a` is passed to the function on line 7, a local variable b is initialized to the same value that a is referencing, which is the array object in the global scope.
// when b[2] += 7 is executed, the array object referenced by a is being executed
// when the value of `a` is logged on line 8, we see the result of this mutation.