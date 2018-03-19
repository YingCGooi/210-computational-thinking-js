var a = 'global';

function checkScope() {
  var a = 'local'; // 2. local variable a is declared and initialized with a value of 'local'
  function nested() {
    var a = 'nested'; // 4. inner local variable a is declared and initialized with a value of 'nested'
    function superNested() {
      a = 'superNested';
      return a;
    }

    return superNested(); // 5. returns 'superNested'
  }

  return nested(); // 3. function invocation 6. returns superNested
}

console.log(checkScope()); // 1. The first function invocation 7. receives final return value 'superNested'
console.log(a); // 8. since we didn't modify the global variable a, it still has the value 'global'