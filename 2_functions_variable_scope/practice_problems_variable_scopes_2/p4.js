var a = 1;

function foo() {
  // invocation of foo()
  function bar() {
    a = 3; // global variable a is reassigned to 3
    return 4;
  } // after hoisting

  a = 2; // global variable a is reassigned to 2

  return bar(); // invocation of bar(), 4 is returned
}

console.log(foo()); // logs 4
console.log(a); // logs 3