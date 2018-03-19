var total = 50;
var increment = 15;

function incrementBy(increment) {
  // variable shadowing occurs when a parameter name is same as a variable declared in the outer/global scope
  // function arguments are locally scoped variables, even when they have the same names as variables defined in the outer scope.
  total += increment;
}

console.log(total); // logs 50;
incrementBy(10);
console.log(total); // logs 60;
console.log(increment); // logs 15;
