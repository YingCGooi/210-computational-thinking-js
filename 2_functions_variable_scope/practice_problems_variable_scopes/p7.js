console.log(a); // Uncaught ReferenceError: a is not defined

function hello() {
  a = 1;
}

// after hoisting, function hello goes to the top. hello() function is not called, thus a is not initialized and we didn't assign a value to a, since we also didn't declare a anywhere, JS produces a ReferenceError.
