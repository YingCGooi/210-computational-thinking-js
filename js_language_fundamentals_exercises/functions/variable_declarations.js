console.log(a); // undefined

var a = 1;

// The concept is hoisting
// Variable a is initialized to a value of 1, which can be further dissected to:
// 1. the variable a is declared
// 2. a is assigned a value of 1

// JavaScript hoists each variable declaration to the top of its scope, the assignment operation is not hoisted.

// After hoisting, this code becomes:
var a;
console.log(a);

a = 1;
// the program logs undefined on line 2.
// the assignment of 1 to a occurs afterwards.