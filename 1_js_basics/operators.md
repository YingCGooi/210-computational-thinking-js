### Operators
Symbol that tells the computer to perform operations on operands (values)

`a + b` -> `+` is the operator and `a` and `b` are operands.

### Arithmetic operators
Takes two numeric values as input and return a single numeric value.

The standard arithmetic operators are `+, -, /, * and %`

`%` returns the remainder of an integer division.
`10 % 3 === 1` and `10 % -3` returns 1, not `-2`

### Assignment Operators
Assigns the value of the right operand to the left operand.

`x = 10` assigns `10` to `x`.

JS also has compound assignment operators.
Here are some of the compound assignment operators.

`a %= b` is the same as `a = a % b`

### Comparison operators
When the oprands are of different types, JS will try to implicitly convert them to suitable tpes.

JS programmers avoid using `==` and `!=`. The strict comparisons do not perform any conversions.

Equal (==): Returns true if operands are equal, regardless of the differences in their types

Strict Equal (===): Returns true if operands are equal and of the same type.

Strict Not equal (!==): Returns true if operands are not equal and/or not of the same type.

### String operators
String comparison using Unicode lexicographical ordering.

```js
'Ant' > 'Falcon'; // false
'a' < 'b'; // true
'50' < '6';
```

Strings support concatenation operator, you can use the `+=` operator, which works similarly to numeric += operator.

### Logical Operators
- Logical And (&&)

Returns `true` if both operands are `true`, `false` otherwise.

- Logical Or(||)

Returns `true` if at least one operand is `true`. Otherwise, returns `false`
For non-boolean values, this returns the first operand if it can be converted to `true`, otherwise the second operand.

- Logical Not (!)

Returns `true` if its operand can be converted to `false`. Otherwise, `false`
Note that this is a unary operator, takes only one opearand. You must specify the `!` before the operand.

```
!true; // false
!false; // true
!!true; // true
!1; // false
![]; // false
```

