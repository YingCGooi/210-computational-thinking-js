// Variable Shadowing
var name = 'Julian';

function greet() {
  var name = 'Logan'; // variable declaration shadows the outer name variable
  console.log(name); // we can only access the inner `name`
}

greet(); // logs: Logan

console.log(name); // logs: Julian

// If a Function has an argument with the same name as a variable from an outer scope, the argument shadows the outer variable

var name2 = 'Julian2'

function greet2(name2) {
  console.log(name2);
}

// When the function is called, the value of `name2` inside `greet2` is not dependent on the value in the outer scope. Instead, `name` receives the value passed to `greet()` in the invocation.

greet2('Sam');
// logs: Sam
