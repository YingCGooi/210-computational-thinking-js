function hello() {
  a = 'hello';
}

hello(); // if a not declared with `var`, a is initialized at a global scope
console.log(a); // logs 'hello'

// without an explicit declaration, a becomes a property of global object