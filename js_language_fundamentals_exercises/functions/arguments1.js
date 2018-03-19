var a = 7;

function myValue(b) {
  b += 10;
  // b is referencing the local variable b within myValue. A function argument turns into a local variable within the function's body
}

myValue(a); // returns 17
console.log(a); // logs 7


// JavaScript is a pass by value.
// Passing variable a to the myValue function binds the local variable b to the a variable value of 7
// The reassignment of b within the function has no effect on the outer variable a.
// When the program logs the value of a, the value remains the same, 7