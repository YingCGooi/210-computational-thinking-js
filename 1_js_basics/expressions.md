### Expressions
Is any valid code that resolves to a value.

```js
'hello';   // a single string is an expression
10 + 13;   // arithmetic operations are expressions
sum = 10;  // assignments are expressions
```

- Arithmetic: expressions that evaluate to a number `10 + 13`
- String: Expressions that evaluate to character string
- Logical: expressions that evaluate to `true` or `false`

An expression can appear anywhere that JS expects a value.

```js
var a
var b
var c

a = 3;
b = 10 + 3;
c = (a + (3 + b)); // a more complicated expression
```

### Operator Precedence
JS performs multiplication and division before addition and subtraction.
Operators within parentheses are evaluated first.

```js
3 + 3 * 4 // 15
(3 + 3) * 4

```

### Increment and Decrement Operators
The increment (++) and decrement (--) increase or decrease their operands by `1`.

It doesn't matter which form you use:

```js
var a = 1;
a++; // same as a = a + 1
++a; // same as a = a + 1
a--; // same as a = a - 1
--a; // same as a = a - 1
```

The prefix and postfix forms behave differently if they are part of a more complex expression:
- If operator appears after operand, JS evaluates the expression then modifies the operand.
- If operator appears before the operand, JS modifies the operand, then evaluates the expression.

```js
var a;
var b;
var c;

a = 1;
b = a++; // equivalent to b = a; a++;
// b is 1, a is 2
c = ++a; // equivalent to ++a, c = a
// a is 3, c is 3
```

### Logical Short Circuit Evaluation in Expressions
`&&` and `||` are evaluated using 'short-circuit' rules.

`a || b` if `a` is `true`, the result is always `true`
`a && b`, if `a` is `false`, and returns `false` without evaluating `b`.

```js
var a = true;
var b = false;

a || (b = true);  // b is still false after this, because (b = true) is never evaluated
// since b is false, the second operand is never evaluated
b && (a = 1);     // a is still true after this, because (a = 1) is never evaluated
```

### Statements
Statements in JS don't necessarily resolve to a value.
For example,
variable assignments are expressions, but variable declarations are statements.

```js
var a; // a statement declare variables
var b;
var c;
var b = (a = 1); // assignments are expressions
var c = (var a = 1); // error, since a statement cannot be used as part of an expression

```

The other types of statements are `if ... else ...` and `switch` for branching logic, `while` and `for` looping.