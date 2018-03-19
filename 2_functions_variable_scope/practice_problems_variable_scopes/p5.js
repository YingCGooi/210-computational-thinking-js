function hello() {
  var a = 'hello';
}

hello(); // local variable a is initialized within the inner scope of hello() function
console.log(a); // Uncaught ReferenceError: a is not defined is raised. we are referring a variable `a` that is not defined globally.