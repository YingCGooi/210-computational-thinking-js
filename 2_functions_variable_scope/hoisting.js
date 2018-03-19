// For variable declarations
// Declaring a variable anywhere in a scope is equilavent to declaring it at the top of the scope.
// JS effectively moves the variable declarations to the top of the scope

// this code
console.log(a1);
var a1 = 123;
var b1 = 456;

// is equivalent to:
var a2;
var b2;

console.log(a2);
a2 = 123;
b2 = 456;

// JavaScript hoists only variable declarations, not assignments.

// For Function Declarations
// JavaScript hoists Function declarations to the top of the scope. It hoists the entire Function declaration.

console.log(hello());

function hello() {
  return 'hello world';
}

// is equivalent to:
function hello() {
  return 'hello world';
}

console.log(hello()); // logs "hello world"

// For function expressions
// Function expressions involve assigning a function to a declared variable. They obey the hoisting rules for variable declarations.

console.log(hello());

var hello = function () {
  return 'hello world';
};

// is equivalent to:
var hello;

console.log(hello());    // raises "Uncaught TypeError: hello is not a function"

hello = function () {
  return 'hello world';
};



// For variable and function declarations
// When both a variable and a function declaration exist, the function declaration is hoisted first.
bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}

// the equivalent hoisted code:
function bar() {
  console.log(foo);
} // function bar() is above var 'foo'

var foo;

bar();          // logs undefined
foo = 'hello';




// since bar uses a variable that is in the global scope, the timing of the assignment becomes relevant.


bar(); // logs "world"
var bar = 'hello';

function bar() {
  console.log('world');
}




var bar = 'hello';
bar(); // raises "Uncaught TypeError: bar is not a function"

function bar() {
  console.log('world');
}

// hoisted version
function bar() {
  console.log('world');
}

bar();
bar = 'hello';




function bar() {
  console.log('world');
}

bar = 'hello';
bar();
// function declarations are hoisted first, the variable declaration of the same name becomes redundant and effectively a reassignment.
// Since bar is a type of string, therefore results in an error.


// Best Practice
// always declare variables at the top of their scope.

function foo() {
  var a = 1;
  var b = 'hello';
  var c;

  ...
}

// always declare functions before calling them

function foo() {
  return 'hello';
}

foo();


