```js
var a = 7;

function myValue(b) {
  b += 10; // local variable b is reassigned, has no effect on the global variable a
}

myValue(a); // global variable `a` is not reassigned
console.log(a); // 7
```

JavaScript is "pass-by-value".

Line 4: Passing variable `a` to the `myValue` function binds the local varibale `b` to `a` variable's value of 7.

Line 5: Even though `a` and `b` are both referencing the same value, the reassignment of `b` has no effect on the outer variable `a`

Line 9: The program logs the value of `a` to the console, its value remains the same as when it was initialized to `7`.

### Part 2
```js
function myValue(a) {
  // variable shadowing happens as parameter `a` has the same name as the global variable `a`
  a += 10; // a is a local variable assigned with the value passed in as an argument
}

var a;
a = 7;
myValue(a);
console.log(a); // 17
```

Demonstration:
This code demonstrates pass-by-value and varible shadowing

Line 22: When an argument is passed to a function, a local variable with the same name as the corresponding parameter is created within the inner scope of the function. There are two variables named `a` that exist in this program: one in the global scope and the other in the function's local scope.

Line 24: So the reassignment of the local variable `a` within the function has no effect on the global variable `a`

### Part 3
```js
var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);
```

Line 42: A global variable `a` is declared and initialized to an array `[1, 2, 3]`

Line 48: The reference to the array `[1, 2, 3]` in the form of global variable `a` is passed in to the function call `myValue()`. Javascript is pass-by-value, however when passing objects and arrays, the value is a reference to the location of the object/array.

Line 44: A local variable `b` within the inner scope of `myValue` is assigned the value that's passed in, which is the reference to the array `[1, 2, 3]` in the global scope. `b` is now referencing the array that `a` is referencing.

Line 45: `b[2] += 7` reassigns the third element within the array from `3` to `10`. The element (property) `2` of the array now points to `10`. The original array is modified and `a` will see this change.

Line 49: The program logs `[1, 2, 10]`. `a` is still referencing the original array, which has been modified by the function `myValue()`

This demonstrate that even though JavaScript is pass by value, when passing objects, the value is the reference to the object.

### Variable Declarations
```js
console.log(a); // undefined

var a = 1;
```

The concept demonstrated is hoisting.
On line 3, the program intializes the variable `a` to the value of `1`. There are two things happening here: 
1) The variable `a` is declared and
2) `a` is assigned a value of `1`

JavaScript interpreter first goes over the code to find and associate variable declarations with their appropriate scope. This is as if JavaScript moves (or hoists) each variable declaration to the top of its scope.

The assignment operation, however is not hoisted.

Here's the code after hoisting:
```js
var a;
console.log(a);

a = 1;
```

The program logs `undefined` because on line 2, the assignment of `1` to `a` has not yet occured.

### Function Declarations

```js
logValue(); // logs 'Hello, world'

function logValue() {
  console.log('Hello, world!');
}
```

Hoisting is the process of finding and associating variable declarations with their respective scope-prior to the execution of all other code.

The JavaScript interpreter also hoists function declarations. In this case, the entire function `logValue` including its name and body is hoisted.

Further Exploration:
```js
var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);
```
Functions declarations take precedence over variable declarations. Function declarations are moved to the top of the scope before variable declarations.


```js
function logValue() {
  console.log('Hello, world!');
}

logValue = 'foo';

console.log(typeof logValue);  // => "string"
```
When we have a function declaration and a variable declaration with the same name, the variable declaration is omitted because it becomes redundant.

We can see that at the beginning the variable `logValue` references a function, but later is reassigned to a `string` value. `typeof logValue` returns `'string'` and `'string'` is logged to the console.