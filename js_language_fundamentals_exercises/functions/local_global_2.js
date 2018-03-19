var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction(); // logs 'This is local'


// On line 8, someFunction() is invoked. 
// On line 4, myVar is declared within the inner scope, assigned with the value 'This is local'
// On line 5, console.log(myVar) is located inside of someFunction. JavaScript gives priority to the myVar in the local scope, since that's the same scope from which myBar is being referenced by console.log
// The global myVar cannot be accessed from within the local scope, this behavior is called variable shadowing.