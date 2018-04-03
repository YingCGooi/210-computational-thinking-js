### Operators

`%` is a remainder operator.
It works the same to all positive integers.
`10 % -3` returns  `-2` instead.

Strings can be compared just as numbers, in Unicode lexicographical order.

```js
'a' < 'b';         // true
'Ant' > 'Falcon';  // false
// String comparisons use Unicode lexicographical ordering
'50' < '6';        // true ('5' precedes '6' lexicographically)
```

### Expressions
Any valid code that resolves to a value.

`hello` is a single string, which is an expression
`10 + 13` is an arithmetic operation, which is an expression
`sum = 10` - assignments are expressions

`c = (a + (3 + b));` is a more complicated expression

### Operator Precedence
Parentheses override default precedence, JS evaluate operators within parentheses first.

### Increment and Decrement Operators
The operator may appear either before (prefix) or after (postfix) the operand.

It doesn't matter which form you use:
```js
var a = 1;
a++;        // same as "a = a + 1"; a is now 2
++a;        // same as "a = a + 1"; a is now 3
a--;        // same as "a = a - 1"; a is now 2
--a;        // same as "a = a - 1"; a is now 1
```

- If the operator appears after the operand, JavaScript evaluates the expression first then modifies the operand.
- If the operator appears before the operand, JS modifies the operand, then evaluates the expression

```js
var a;
var b;
var c;

a = 1;
b = a++;
// equivalent to "b = a; a++", b is 1 and a is 2
c = ++a;
// equivalent to "++a; c = a"; c is 3 and a is 3
```

Line 48: global variable `a` is initialized to value `1`
Line 49: `b = a++` is equivalent to `b = a; a++`. In this case, the expression `b = a` is evaluated first, which means `b` is reassigned the value which `a` is referencing - `1`. Then, the operator `++` modifies `a`, which reassigns `a` with the value `2`.

Line 51: `c = ++a` is equivalent to `++a; c = a`. In this case, `a` is reassigned with the value `3`, and then `c` is reassigned with the value which `a` is pointing to, which is `3`.


### Short Circuit Evaluation
For expressions like `a || b`:
- if `a` is `true`, the result is always true.
- JS does not need to evaluate `b` in order to make this determination
- JS short circuits the evaluation and returns `true`

As with `a && b`:
- JS short circuits the evaluation if `a` is `false`
- returns `false` without evaluating b.

```js
var a = true;
var b = false;

a || (b = true);  // b is still false after this, because (b = true) is never evaluated
b && (a = 1);     // a is still true after this, because (a = 1) is never evaluated
```

Line 75: Since `a` evaluates to `true`, JavaScript does not need to evaluate the expression to the right of the `||` operator. Therefore, `b` is never reassigned. (b = true) is never evaluated.

Line 76: Since `b` returns `false`, JavaScript does not need to evaluate the expression to the right of the `&&` operator. `a` is still referencing `true`, because `a` is never reassigned. (a = 1) is never evaluated.


### Statements
Variable declarations are statements. We cannot execute a statement as if it is an expression.

```js
var b = (a = 1);      // this works, because assignments are expressions too
var c = (var a = 1);  // this gives an error, since a statement can't be used as part of an expression

```

Line 1:  (a = 1) is an assignment. Assignment are expressions. This works because the right-hand side of the assignment (`=`) operator is an expression.

Line 2: (var a = 1) contains a statement. This will not work since a statement cannot be used as part of an expression. An expression is expected to the right of the assignment (`=`) operator.
