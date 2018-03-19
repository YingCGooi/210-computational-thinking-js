function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar); // This is global

// On line 5, someFunction() is invoked.
// On line 2, myVar is initialized with a string of 'This is global'
// Since there are no variable declarations of myVar in the global scope or the inner scope, myVar is initialized as a global variable.
// On line 6, console.log() references global variable myVar, the value 'This is global' is output to the screen.

// When there is no variable declaration for myVar, JS looks in the outer scope for the declaration. Since it doesn't exist, JS binds myVar to be a property of the global object.