// coercions or conversions convert primitve JS values from a type to another.

console.log(Number('b'));

// Nan is returned if a string cannot be converted to a number

// The parseInt() and parseFloat() functions turn strings to numbers. The second radix argument represent base in math numerical systems.

console.log(parseInt('123', 10));
console.log(parseInt('123.12', 10)); // will only return whole numbers
console.log(parseFloat('123.12'));

// use String() to turn numbers into strings:
console.log(String(1.23)); // "1.23"

// toString() works the same way

console.log((123.12).toString());

// convert to a number with the + operator to the string:

123 + ''; // "123"
console.log('' + 123.12); // "123.12"

// To turn boolean values, use the String() function.
String(true);

console.log(String(true));
console.log(String(false));

true.toString();
false.toString();

// Primitive to Booleans
var a = 'true';
a === 'true'; // true

Boolean(null); // false
Boolean(NaN);  // false
Boolean(0);    // false
Boolean('');   // false
Boolean(false); // false
Boolean(undefined); // false
Boolean('abc'); // other values will be true
Boolean(123); // true
Boolean('true'); // including the string 'true'
Boolean('false'); // but also including 

console.log(Boolean('false'));

// The double ! operator gives a simpler way to coerce a truthy of falsy value to its boolean.

!!(null); // false
!!(NaN);  // false
!!(0);    // false
!!(''); // false
!!(false); //false
!!(undefined); //false