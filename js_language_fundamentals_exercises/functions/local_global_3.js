var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar); // logs 'This is local'

// On line 7, someFunction() is called
// On line 4, myVar that was declared in the global scope is reassigned a new string 'This is local' within someFunction(). Javascript functions have access to the outer scoped variables. Variables in the global scope can be accessed and modified from within an inner scope.
// console.log() on line 8 refers to myVar, which is now reassigned to 'This is local'.

