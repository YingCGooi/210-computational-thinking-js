// Whenever we define a Function, it closes over the variable scope in effect.
// We call this creating a closure.
// A closure retains references to everything that is in scope when the scope is created.
// That way, Functions can still access those references wherever we invoke the Function.

// The value of a variable can change after creating a closure that includes that variable. When this happens, the closure sees the new value.

var count = 1;

function logCount() {  // create a closure
  console.log(count);
}

logCount();            // logs: 1

count += 1;            // reassign count
logCount();            // closure sees new value for count; logs: 2


// Lexical scoping
// JS uses the structure of the source code to deteremine the variable scope.
// The source code defines the scope.
// There is a hierarchy of scopes from the local scope of the code up to the program's global scope.
// JS searches this hierarchy from the bottom to the top. It stops and returns the first variable it finds with a matching name.
// variables in a lower scope can shadow a variable with the same name in a higher scope.
// Lexical scoping rules are also called "static scoping".