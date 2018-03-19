var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();
// On line 7, someFunction is invoked
// On line 4, myVar that is initialized in the global scope is accessed from within someFunction.
// The console.log() expression outputs 'This is global' - referenced by global variable myVar.

// JavaScript attempts to find a variable with that name in the current scope.
// If the variable does not exist in this scope, JavaScript then starts looking for myVar in the next outer scope, until a variable with the same name is found.

// If JS reaches the outermost (global) scope without finding a variable, a ReferenceError will be raised.