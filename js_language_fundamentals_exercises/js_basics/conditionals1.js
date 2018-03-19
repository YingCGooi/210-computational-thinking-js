var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello');
} // logs 'Hello'

if (!myString) {
  console.log('World');
} // does not log
// !myString is !'hello', which returns false. The block does not execute.

if (!!myArray) {
  console.log('World');
} // logs 'World'
// !!myArray is !![]. Since [] is a truthy value, ![] returns false and subsequently !![] returns true.
// The if statement evaluates the conditional expression to be true and thus execute the code within the block.

if (myOtherString || myArray) {
  console.log('!');
} // logs '!'
// myOtherString references '', which is a falsy value in js.
// myArray references [], which is a truthy value in js.
// when || (OR operator) evaluates operands, any truthy value on either sides will return true for the expression.


// The 6 values are falsy;
// false
// null
// undefined
// 0
// NaN
// ''

// All other values are truthy