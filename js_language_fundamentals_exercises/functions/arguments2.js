var a = 7;

function myValue(a) {
  // variable shadowing occurs when a function has a parameter that has the same name as a variable in the outer scope
  a += 10;
}

myValue(a); 
console.log(a); // logs 7

// It demonstrates pass-by-value and variable shadowing
// When an argument is passed to a function, a local variable with the same name as the corresponding parameter is created within the inner scope of the function.
// There are two variables named `a`: one in the global scope and the other in the local scope.
// reassignment of the local variable a within the function has no effect on the global variable a.