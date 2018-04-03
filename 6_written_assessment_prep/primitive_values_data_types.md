### Data Types & Primitive Values

Five primitive types:
- number
- boolean
- string
- null
- undefined

Object is a compound data type.

```js
typeof 1.2;        // "number"
typeof 'hello';    // "string"
typeof false;      // "boolean"
```

`typeof` is an operator and is used to get data type of any values.

### Number
JS uses 64-bit to store numbers in memory.
JS uses Double Precision Floats
`Number.MAX_SAFE_INTEGER` is the largest number that can precisely stored.

There seem to be slight discrepancies when using Floating point values.

```js
0.1 + 0.2;    // returns 0.30000000000000004, not 0.3!
```

### Special Characters
We need to escape characters if a string contains single quote characters and you use single quotes around the whole string.

If we used double quotes, we would have to escape the double quotes.

```js
var quote = '"It\'s hard to fail, but it is worse never to have tried to succeed." - Theodore Roosevelt';

var quote = "\"It's hard to fail, but it is worse never to have tried to succeed.\" - Theodore Roosevelt";
```

### Concatenation
JS always performs concatenation when `+` is used with a string operand. If used with numbers on both operands, it performs addition.

Bracket notation is an operator in JS.


### Immutability
number, string, boolean, null, undefined are immutable.

```js
a = 'hello';
a.toUpperCase();  // the "hello" string is not mutated, but a new "HELLO" string is returned
a;                // still "hello"
```

Line 1: global variable `a` is assigned the String value `hello`
Line 2: `String.prototype.toUpperCase()`method is called on `hello`, converting `hello` into a `String` wrapper object and returns a new string value `HELLO`. 
Line 3: The original String primitive `hello` referenced by `a` is not mutated. `a` still references `'hello'`

### Dynamic Typing
JS is a dynamically typed language, a variable can hold a reference to any data type, and can be reassigned a different type without error.

```js
// initialize to a string
var myVariable = 'Hello, World';

// reassign to a number
myVariable = 23;

// now the variable holds a number value
myVariable;      // 23
```

Line 1: we initialize the global variable `myVariable` to a string value `Hello, world`
Line 2: `myVariable` is reassigned to a number value.
Line 3: `myVariable` now references `23`. The old string value is left behind for garbage collection (freeing the memory)