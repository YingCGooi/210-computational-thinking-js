logValue();

function logValue() {
  console.log('Hello, world!');
}

// logs 'Hello, world!'
// The concept is hoisting, which is process of finding and associating variable declarations with their respective scope before the execution of all other code.
// in JS, functions are hoisted to the top of the page before the code is executed.
// after hoisting, the code is equivalent to:

function logValue() {
  console.log('Hello, world!');
}

logValue();
// Invoking the function logValue() will execute line 4, console.log('Hello, world!') will output 'Hello, world!' to the screen



var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue); // outputs 'string'
// functions will get hoisted to the top first and takes precedence over variable declarations.