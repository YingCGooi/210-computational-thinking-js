// 

1 + true       // true is coerced to the number 1, so the result is 2
'4' + 3        // 3 is coerced to the string '3', so the result is '43'
false == 0     // false is coerced to the number 0, so the result is true

// Flexibility makes bugs likelier.
// make debugging challenging

// the plus (+) operator
// following the same rules as `Number()`

+('123')
+(true)
+(false) // 0
+('') // 0
+(' ') // 0
+('\n') // 0
+(null) // 0
+(undefined) // NaN
+('a') // NaN
+('1a') // NaN

console.log(+('123'));
console.log(+(''));
console.log(+('\n'));

'123' + 123 // '123123' -- if a string is present, coerce for string concatenation
123 + '123' // '123123'
null + 'a' // 'nulla' -- null is coerced to string
'' + true // "true"

console.log('123' + 123);
console.log('' + true);

1 + true // 2
1 + false // 1
true + false // 1
null + false // 0
null + null // 0
1 + undefined // NaN (number type, undefined as a real number)

console.log(1 + undefined);

// When both operands are a combination of numbers, booleans, nulls or undefineds, they are converted to numbers and added together.

1 + true        // 2
1 + false       // 1
true + false    // 1
null + false    // 0
null + null     // 0
1 + undefined   // NaN

console.log(true + false);

// When one of the operands is an object (or arrays and functions), both operands are converted to strings and concatenated together.

[1] + 2 // "12"
console.log([1] + 2);
[1] + '2'; // "12"
[1, 2] + 3 // "1,23"
console.log([1, 2] + 3);
[] + 5 // "5"
console.log([] + 5);
42 + {}; // "42[object Object]"
console.log(42 + {});
console.log(function foo() {} + 42);
(function foo() {}) + 42;  // "function foo() {}42"

// The other arithmetic operators, -, *, /, % are defined for numbers so JS converts both operands to numbers.

1 - true; // 0
'123' * 3; // 369
'8' - '1'; // 7
-'42'; // -42
null - 42; // -42
false / true; // 0
true / false; // Infinity
'5' % 2; // 1

console.log(true / false);
console.log(- true / false);

// Equality Operators
// Non-strict operators, == and !=
// Strict operators ===, !==
// Strict operators never perform type coercions.
// Non-strict operators have a set of rules for coercing types

1 === 1 // true
1 === '1' // false
0 === false // false
'' === undefined // false
'' === 0 // false
true === 1 // false
'true' === true // false

// Non-strict equality operators conversion
// When one operand is a string, the string is converted to a number
'42' == 42; // true '42' becomes 42
42 == '42'; // true
42 == 'a'; // false -- becomes 42 == NaN
0 == ''; // true -- becomes 0 == 0
0 == '\n'; // true -- becomes 0 == 0

// When one operand is a boolen, it is converted to a number
42 == true; // false -- becomes 42 == 1
0 == false; // true -- becomes 0 == 0
'0' == false; // true -- becomes '0' == 0, then 0 == 0
'' == false; // true -- becomes '' == 0, then 0 == 0
true == '1';
true == 'true'; // false -- becomes 1 == 'true', then 1 == NaN

// When one operand is `null`, and the other is `undefined`, the non-strict operator always returns true.
null == undefined // true
undefined == null // true

// Comparing `null` or undefined to any other value returns false.
undefined == false // false
null == false // false
undefined == '' // false
undefined === null // false -- strict comparison

// When one of the operands is `NaN`, the comparison always return false.

NaN == 0 // false
NaN == NaN // false
NaN === NaN // false -- even with the strict operator
NaN != NaN // true -- NaN is the only JavaScript value not equal to itself

// Relational Operators
// < > <= >= are defined for numbers (numeric comparison), there are no strict versions of these operators.
// When both operands are string, JS compares them lexicoraphically, otherwise, JavaScript converts both to numbers before comparing them.

11 > '9' // true -- '9' is coerced to 9
'11' > 9
123 > 'a' // 'a' is coerced to NaN, any comparison with NaN will be false
123 <= 'a' // also false
true > null // true -- becomes 1 > 0
true > false // true -- also becomes 1 > 0
null <= false // true -- becomes 0 <= 0
undefined >= 1 // false -- becomes NaN >= 1
