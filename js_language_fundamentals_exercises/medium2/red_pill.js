// Read through the code below and determine what will be logged. You may refer to the ASCII Table to look up character code values.

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    var result = '';
    var i;
    for (i = 0; i < arguments.length; i += 1) {
      // N
      // I
      result += String.fromCharCode(arguments[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101)); // W e l c o m e
    anotherOne(116, 111);
  }

  anotherAnotherOne(); // logs Welcome
  // logs to
  anotherOne(116, 104, 101); // logs the
  return anotherOne; // undefined
}

one()(77, 97, 116, 114, 105, 120, 33);
// M a t r i x !

// The call to the one function is actually just two successive function calls  - the one function returns the anotherOne function


1: one();
2: anotherAnotherOne();                         // Welcome
3: anotherOne(116, 111);
4: log(result);                                 // to
5: anotherOne(116, 104, 101);
6: log(result);                                 // the
7: anotherOne(77, 97, 116, 114, 105, 120, 33);
8: log(result);                                 // Matrix!