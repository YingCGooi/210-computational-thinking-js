### Explicit Primitive Type Coercions
JavaScript primitives are immutable values: JavaScript doesn't actually convert values: instead it returns a new value of property type.

```js
Number('abc123');        // NaN
```
If a string in its entirety cannot be converted to a number, `Number()` returns `NaN`.

The `parseInt()` and `parseFloat()` global functions turn strings to numbers. With each only handling numeric values in an integer or floating point format.

```js
parseInt('123', 10);     // 123
parseInt('123.12', 10);  // 123, will only return whole numbers
parseInt('123.12');      // 123
parseFloat('000123.12', 10);    // 123.12, can handle floating point values
```

The second `radix` argument specifies the base in mathematical numeral systems for which the value will be converted to.

In order to convert a string into a boolean value, we can use the strict comparison operator `===` to return a boolean `true` or `false`.

```js
a === 'true';            // true
b === 'true';            // false
```

`Boolean()` function is equivalent of using the `!!` operators.
```js
!!('false');  // true
```


### Implicit Primitive Type Coercions

```js
1 + true
'4' + 3
false == 0
```

Line 1: `true` is coerced to the number 1, so the expression returns `2`
Line 2: 3 is coerced to string `'3'`, so `+` concatenates the two operand and returns `'43'`
Line 3: `false` is coerced to `0`, so the expression returns `true`.

### Plus
`+`  operator converts a value into a number, same rule as the `Number()`.

```js
+('123')        // 123
+(true)         // 1
+(false)        // 0
+('')           // 0
+(' ')          // 0
+('\n')         // 0
+(null)         // 0
+(undefined)    // NaN
+('a')          // NaN
+('1a')         // NaN
```

When `+` is used with mixed operands that include a string, JS converts the other operand to a string.

```js
'123' + 123     // "123123" -- if a string is present, coerce for string concatenation
123 + '123'     // "123123"
null + 'a'      // "nulla" -- null is coerced to string
'' + true       // "true"
```

When both operands are combination of numbers, booleans, `null` or `undefined`, they are converted to numbers and added together.

```js
1 + true        // 2
1 + false       // 1
true + false    // 1
null + false    // 0
null + null     // 0
1 + undefined   // NaN
```

When one of the operands is an Object, both operands are converted to strings.

Other Arithmetic Operators will be convert both operands to numbers.

### Equality Operators
Strict equality operators
- Two operands are only equal if both operands are the same type and have the same value.

Non-strict equality operators
- When the operands are different types, JS implicitly coerces them to the same type.

1. When one operand is a string and the other is a number, the string is converted to a number (opposite of the `+` operator)

```js
'42' == 42 // true
42 == '42' // true
42 == 'a' // false -- becomes 42 == NaN
0 == '' // true -- becomes 0 == 0
0 == '\n' // true -- becomes 0 == 0
```

When one operand is a boolean, it is converted to a number

```js
42 == true // 42 == 1 -> false
0 == false // 0 == 0 -> true
'0' == false // '0' == 0 -> 0 == 0 -> true
'' == false // '' == 0 -> 0 == 0
true == '1' // 1 == '1' -> 1 == 1 -> true
true == 'true' // 1 == 'true' -> 1 == NaN
```

When one operand is `null` and the other is `undefined`, the non-strict operator returns `true`.

Comparing `null` or `undefined` to any other value returns `false`.

```js
null == undefined // true
undefined == null // true

// Comparing with other values return false
```

The comparison always returns `false` if one of the operands is `NaN`.

### Relational Operators
`<`, `>`, `<=` and `>=` are defined for numbers and strings. There are no strict versions. When both operands are strings, JS compares them lexicographically.

```js
11 > '9' // true -- '9' is coerced to 9
'11' > 9 // true -- '11' is coerced to 11
123 > 'a' // false -- 'a' is coerced to NaN
123 <= 'a' // false
true > null // true -- becomes 1 > 0
true > false // true -- also becomes 1 > 0
null <= false // true -- becomes 0 <= 0
undefined >= 1 // false -- becomes NaN >= 1
```

```js
var npa = 212;
var nxx = 555;
var num = 1212;

console.log(npa + nxx + num);
```

```js
npa = '' + npa;
nxx = nxx + '';
num += '';

console.log(npa + nxx + num);  // 2125551212
```

Line 1: In the expression `'' + npa`, since both operand types are different (the left is a string and the right is a number), JavaScript coerces the number referenced by `npa` to a string value and returns `'212'`. JavaScript then concatenates two string values together `'' + '212'` and returns `'212'`. This value is then reassigned to `npa`.

### Comparison Operators on Array
```js
var friends = ['Bob', 'Josie', 'Sam'];
var enemies = ['Bob', 'Josie', 'Sam'];
friends == enemies;                    // false
friends === enemies;                   // false
[] == [];                              // false
[] === [];                             // false
```

Neither equality (`==`) nor strict equality (`===`) considers arrays with the same values to be equal.

When two arrays are different arrays, even if they happen to contain the same values, the arrays themselves are different objcts.

If we modify the first value in `friends` to `'Susan'`, the first value in `enemies`.

The equality operators check whether the two arrays are the same array.

This can be demonstrated by comparing an array with itself:
```js
var friends = ['Bob', 'Josie', 'Sam'];
friends == friends;                    // true
friends === friends;                   // true
```

The same will happen if you assign the same array to another variable.
```js
var friends = ['Bob', 'Josie', 'Sam'];
var roommates = friends;
friends == roommates;                  // true
friends === roommates;                 // true
```

When an array is compared with a non-array using the non-strict equality operator, JS coerces the array into a string first.

```js
[] == '0';               // false -- becomes '' == '0'
[] == 0;                 // true -- becomes '' == 0, then 0 == 0
[] == false;             // true -- becomes '' == false, then 0 == 0
[] == ![];               // true -- same as above
[null] == '';            // true -- becomes '' == ''
[undefined] == false;    // true -- becomes '' == ''
[false] == false;        // false -- becomes 'false' == 0, then NaN == 0
```

