// What will the following code snippets log?

// Snippet 1
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}
// Snippet 1 logs 'The total value is 15'


// Snippet 2
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;
// Snippet 2 logs 'The total value is NaN'


// Snippet 3
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
// The total value is 15


// Function declarations result in the creation of a variable

// With function declarations, both function name and body are hoisted

// Hoisting works differently depending on the type of declaration.

// With function declarations, both the function name and body are hoisted.

// With variable declarations, only the variable name is hoisted but not the assignment

// Although function and variable declarations are both hoisted, function declarations are hoisted first.

// Any succeeding variable declarations with the same name are duplicates and ignored.

// the variable declaration for counter is effectively overrode by the function declaration with the same name.

// The second code snippet is the position of call to console.log

// since the assignment happen after console.log call, the expression counter * rate evaluates to NaN