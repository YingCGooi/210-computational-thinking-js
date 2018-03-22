// Read through the code shown below. What does it log to the console at lines 5 and 8?

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray; // myOtherArray is initialized to the same object myArray is referencing

myArray.pop();
console.log(myOtherArray); // logs [1, 2, 3]

myArray = [1, 2]; // myArray is reassigned to a different array object, myOtherArray still references the same array object
console.log(myOtherArray); // logs [1, 2, 3]


// The value logged for `myOtherArray` at line 5 is the same value as the value of `myArray`.

// The value stored in the variable `myArray` is a reference to the location of the value and not the value itself.

// When `pop` is called on `myArray`, `myOtherArray` mirrors the change

// For line 8, the value of `myOtherArray did not change because the value of the reference stored in `myArray` on line 7 is now a different object. A reassignment changes the value stored to reference of a value in a different location.

// `myArray` and `myOtherArray` now have different reference values stored. Any future mutations of `myArray` will no longer affect `myOtherArray`.

myArray.pop();
console.log(myArray);         // [1]
console.log(myOtherArray);    // [1, 2, 3] -- not mutated