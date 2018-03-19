var a = 'outer';

function testScope() {
  var a = 'inner';
  console.log(a);
}

console.log(a); // a resolves the global variable
testScope(); // calls testScope function, a resolves the local variable, logs 'inner'
console.log(a); // resolves as the global variable again. logs 'outer'.