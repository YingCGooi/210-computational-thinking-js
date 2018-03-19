var a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a); // resolves the global variable a, logs 'outer'
testScope(); // reassigns the global variable a to 'inner', logs 'inner'
console.log(a); // resolves the reassigned global variable a, logs 'inner'