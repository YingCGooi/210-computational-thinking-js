// Function Declarations

function hello() {
  return 'hello world!';
}

console.log(typeof hello); // function
console.log(hello.valueOf()); // [Function: hello]

// A function declaration (also called a function statement) initializes a variable with type of function.
// It does not require assignment to a variable.
// The value of the function variable is the function itself.
// This functional variable obeys general scoping rules

function outer() {
  function hello1() {
    return 'hello world!';
  }

  return hello1();
}

console.log(typeof hello1); // cannot access an inner local scope from here

var foo = outer; // assign the function to another variable
foo(); // we can invoke the function here

// Function declarations are similar to variable declarations.

console.log("===============")

// It is important to know that a function declaration also creates a variable.
// we know that we create variables using the var keyword or by passing arguments to a function
// A function declaration gives us a third way
// For every function declaration, a variable is initialized

var stringVar = 'string reference';
var numberVar = 42;   // number reference

function functionVar() {
  return 'function reference';
}

console.log(typeof stringVar);           // string
console.log(typeof numberVar);           // number
console.log(typeof functionVar);         // function

// Reassignment works as expected:
stringVar   = functionVar;               // `stringVar` now references a function
functionVar = 'string reference';        // `functionVar` now references a string

console.log(typeof stringVar);           // function
console.log(typeof functionVar);         // string


console.log("=====================")
// Function Expressions
// Defines a function as part of a larger expression syntax (typically a variable assignment)

var hello = function () {
  // we define an anonymous function (without a name) and assign it to the variable `hello`.
  return 'hello';
};

console.log(typeof hello);
console.log(hello());
// we then use the variable to invoke the function

var foo = function () {
  return function () {   // function expression as return value
    return 1;
  };
};

var bar = foo(); // bar is assigned to the returned function. We call foo and assign the returned function expression to bar.

console.log(bar()); // 1



console.log("==========")
// Named Function Expressions
// We can also name function expressions

var hello = function foo() {
  // the name is only avaiable inside the function
  // the variable can only be referenced from within the function's local scope
  console.log(typeof foo1); // function
}

hello();

// foo1(); // Uncaught ReferenceError: foo is not defined

// named function expressions are useful for debugging
// debugger can show the function's name in the call stack, providing a valuable clue
// named function expressions can be useful for recursive functions


// Spot the differences between function declarations and function expressions
// If a statement begins with the function keyword, then it is a function declaration
// Otherwise it is a function expression

// Even adding parentheses is enough to turn a function declaration into a function expression

function foo3() {
  console.log('function declaration');
}

(function bar2() {
  console.log('function expression');
});

foo3(); // function declaration
// bar2(); // Uncaught ReferenceError: bar is not defined


// A function declaration must always have a name (cannot be an anonymous function)
// A function declaration also creates a variable with the same name as the function's name.

var named = function named() {
  return 'a named function expression assigned to a variable';
};

function declared() {
  return 'a function declaration';
}