var myVar = 'This is global';
// declaration gives myVar a global scope

function someFunction() {
  var myVar = 'This is local';
}
// functions create a new scope that is local to the function

someFunction();
console.log(myVar); // logs 'This is global' because the two myVar on lines 1 and 4 belong to different scopes. 
// someFunction has its own local inner scope, myVar declaration within the function has no effect on the global scope.

// JS uses lexical scope:
// Variables declared outside of a function are global variables
// Variables declared inside a function have function scope and visible only to code that appears inside that function

// It determines the scope of variable by the structure of the program

