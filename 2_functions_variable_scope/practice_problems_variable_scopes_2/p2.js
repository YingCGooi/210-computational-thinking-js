function hello() {
  var a;
  a = 'hello';

  console.log(a); // logs 'hello'

  if (false) {
    a = 'hello again';
  }
}

hello();
console.log(a); // ReferenceError, a is not defined. variable a is defined locally within the inner scope of hello(). There's no global variable named a.