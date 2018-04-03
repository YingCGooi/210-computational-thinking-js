// What does the following code log? Why is this so?
var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
  // not a pure function because it doesn't always return the same value given the same argument values.
};

startingBalance = 5;
// startingBalance is reassigned to 5
console.log(totalPayable(chicken, chickenQuantity));
// 5 + (5 * 7) => 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));
// 10 + (5 * 7) => 45

// The concept of closures:
// Closures have functions 'retain access' to variables defined in an 'enclosing scope'
// In this case, the enclosing scope is the global scope which contains the variables `startingBalance`, `chicken` and `chickenQuantity`
// It means that a variable's value is not fixed at the time when the function is defined or first executed.

// Therefore, the value of `startingBalance` on line 7 is not always 1, but is a reference to the value stored in the startingBalane variable in global scope

// The first time the totalPayale function is called, the value of startingBalance is 5.
// The second time the function is called, the value of startingBalance is 10.
// totalPayable is not a pure function. It does not always return the same value.

