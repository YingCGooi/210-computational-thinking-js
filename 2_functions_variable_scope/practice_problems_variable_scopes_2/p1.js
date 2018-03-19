function say() {
  if (false) {
    var a = 'hello from inside a block';
  } // hoisting is function-level, not block-level.

  console.log(a);
}

say();

// after hoisting, this code becomes:
function say() {
  var a;
  if (false) {
    a = 'hello from inside a block';
  }

  console.log(a);
}

say(); // undefined
