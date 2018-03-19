var a = 'outer';
var b = 'outer';

console.log(a); // logs 'outer'
console.log(b); // logs 'outer'
setScope(a);
console.log(a); // logs 'outer'
console.log(b); // logs 'inner'

function setScope(foo) {
  // function arguments become local variables in the function. Assigning to an argument has no effect on the original argument.
  foo = 'inner';
  b = 'inner';
}
