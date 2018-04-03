### Variable Scopes in JS

```js
var a = 'outer';

function testScope() {
  var a = 'inner';
  console.log(a);
}

console.log(a); // outer
testScope(); // inner
console.log(a); // outer
```

_
Line 11: the first invocation of `console.log`; `a` resolves as the global variable which is declared on line 4, initialized to the value `'outer'`. Thus, `'outer'` is logged to the screen.

_
Line 12: calls the `testScope()` function. `a` within the function resolves as the local variable, so line 8 logs `inner`.
_
Line 13: `a` resolves as the global variable again, logs `outer`.

### Problem 2
```js
var a = 'outer';

function testScope() {
  a = 'inner'; // resolves as global variable
  console.log(a);
}

console.log(a); // outer
testScope(); // inner
console.log(a); // inner
```

_
On line 33, `a` resolves as the global variable initialized on line 26, due to JS lexical scoping rules. therefore, `'outer'` is being output to the console.
_
On line 29, `a` resolves as global variable. The assignment assigns `'inner'` to `a`
On line 30, `'inner'` is logged to the console. The function returns `undefined` since there is no `return` keyword specified.
_
On line 35, `a` references the reassigned value `'inner'`, thus `console.log()` logs `'inner'` to the console.


### Example 3
```js
var basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv'; // reassignment of the global variable basket
  }

  console.log(basket);
  // the first log operation: basket still references its original value 'empty'

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    // a new local variable `basket` is initialized here.
    console.log(basket); // logs 'play station'
  } // upon returning from shop3(), the local variable goes away

  shop1(); // function call here reassigns global variable `basket` to the value 'tv'
  shop2(); // function call here reassigns global variable`basket` to 'computer'
  shop3(); // function call here does not reassign global variable `basket`

  console.log(basket); // logs the current value of global variable `basket`, which is 'computer'
}

goShopping(); // invocation of goShopping()
```

Last line: Invocation of function `goShopping()`
The first log operation `console.log(basket)` - `basket` resolves as the global variable `basket` which references the string value `'empty'`.
`shop1()` invocation - Before reassignment, Javascript checks the current scope until a variable declaration with the same name as `basket` is found. Since there is no variable declaration within `shop1()`, JS checks its surrounding scopes until the global variable `basket` is found. JS then reassigns the global variable `basket` to the string value `'tv'`.
`shop2()` invocation - the same process as previous happens - The global variable `basket` is reassigned the string value `'computer'`
`shop3()` invocation - a new local variable `basket` is declared and initialized to `'play station'`. When the log operation is executed, `basket` resolves as the local variable `basket` within the function's current scope. `'play station'` is logged to the console. 
Last `console.log()` operation - `basket` resolves as the global variable `basket`, which now references `'computer'` - 'computer' is output to the screen.

### Example 4
```js
function hello() {
  a = 'hello';
}

hello();
console.log(a);
```

We call the `hello()` function. 
_
Since there's no previous declaration of `a` with the `var` keyword, the `hello()` function binds `a` to a property of the `global` object - which has the same effect as if we declare `a` as a global variable.

_
The last line, `a` resolves as the global variable `a` and logs `hello`.


### Example 5
```js
function hello() {
  var a = 'hello';
}

hello();
console.log(a);
// logs Uncaught ReferenceError: a is not defined
```

Since we don't define a global variable, `a` line 6 does not find any variables named `a`, thus it raises a `ReferenceError`.


### Example 6
```js
console.log(a);

var a = 1;
// log undefined
```

After hoisting, equivalent to:
```js
var a;
console.log(a);
a = 1;
```

Line 2 logs `undefined` since we declared `a` but never assigned it a value before calling `console.log()`.

### Example 7
```js
console.log(a);

function hello() {
  a = 1;
}
// Uncaught ReferenceError: a is not defined
```

After hoisting, the above is equivalent to:

```js
function hello() {
  a = 1;
}

console.log(a);
```

We define `hello()` but never call it, so we never assign a value to `a`. Since `a` is not declared anywhere, the last line will raise a `ReferenceError`.

### Example 1
```js
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a); // logs undefined
}

say();
```

After hoisting, this code becomes:
```js
function say() {
  var a;
  if (false) {
    a = 'hello from inside a block';
  }

  console.log(a); // logs undefined
}

say();

```

We declare `a`, but `a` was never assigned a value, since the assignment within `if` statement was never executed.


### Example 2 
```js
function hello() {
  var a; // local variable a is declared here
  a = 'hello'; // a is assigned the value of 'hello'
  console.log(a); // 'hello' is logged to the screen

  if (false) {
    a = 'hello again';
  }
}

hello(); // function invocation here
console.log(a); // Reference error, a is undefined 
```

After hoisting, `a`'s scope is within the body of `hello()`, since there is no global variable named `a`, the last line raises an error.

```js
var a = 'hello';

for (var i = 0; i < 5; i += 1) {
  var a = i; // no inner scope
}

console.log(a);
```

After hoisting:

```js
var a;
var i;
a = 'hello';

for (i = 0; i < 5; i += 1) {
  a = i; // no inner scope
}

console.log(a);
```

Line 1: `a` is declared as a global variable and initialized to the value 'hello'.

Line 3: within the `for` loop components, `i` is declared as a global variable initialized to the value 0. `i` is then incremented by `1` until it reaches a value of `4`.

Line 4: within the `for` loop, the global variable `a` is reassigned to `i` five times. The final value of `i` is `4` before the loop terminates.

Line 5: `console.log()` is called, `a` resolves to the global variable which now references the reassigned value `4`.


### Example 4
```js
var a = 1;

function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

console.log(foo());
console.log(a);
```

After hoisting, the above code becomes:

```js
function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

var a;
a = 1;

console.log(foo()); // 4
console.log(a); // 3
```

Line 270: `a` is declared as a global variable
Line 271: `a` is initialized to the value `1`

Line 281: the function `foo()` is invoked.
Line 269: Since `a` global variable is accessible from within an inner scope, it is reassigned to the value `2`
Line 275: `bar()` is invoked
Line 271: Since `a` global variable is accessible from within the innermost scope, `a` is reassigned to the value `3`

Line 272: We return the value `4` from `bar()`
Line 275: Upon returning from the function `foo()`, `4` is returned.

Line 281: `console.log()` is called, the return value of `4` from `foo()` is logged to the console.

Line 282: `console.log()` is called, `a` here resolves to the reassigned value `3`. `3` is logged to the console.


### Example 5
```js
var a = 'global';

function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function superNested() {
      a = 'superNested';
      return a;
    }

    return superNested();
  }

  return nested();
}

console.log(checkScope());
console.log(a);
```

After hoisting, this code becomes:

```js
function checkScope() {
  var a = 'local'; // local variable a is initialized, variable shadowing occurs, checkScope() now only has access to the local variable a
  function nested() {
    var a = 'nested'; // an inner local variable a is initialized to 'nested', variable shadowing occurs. nested() now only has access to the inner local variable
    function superNested() {
      a = 'superNested'; // the inner local variable `a` is reassigned to 'superNested'
      return a; // 'superNested' is returned
    }

    return superNested(); // 'superNested'
  }

  return nested(); // 'superNested'
}

var a;
a = 'global';

console.log(checkScope()); // logs 'superNested'
console.log(a); // logs 'global'
```

Lines 342 and 343: `a` is declared as a global variable and initialized to the value `'global'`

Line 345: We call the function `checkScope()` and pass in its return value to `console.log()` to be logged to the console.

### Problem 6
```js
function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

var a = 'outer';
var b = 'outer';

console.log(a); // outer 
console.log(b); // outer
setScope(a); 
console.log(a); // outer
console.log(b); // inner
```

Line 356: Function arguments become local variables in the function, so assigning to an argument has no effect on the original argument.

### Problem 7
```js
function incrementBy(increment) {
  // variable shadowing occurs because a parameter name is same as a global variable name
  total += increment; // reassign global variable total to itself + 10
}

var total = 50;
var increment = 15;

console.log(total); // 50
incrementBy(10); 
console.log(total); // 60
console.log(increment); // 15 - global variable increment was never reassigned
```

Our parameter has the same name as the variable declared on line 2, it is not the same variable. Function arguments are locally scoped, even when they have the same names as variables defined in the outer scope.

### Problem 8
```js
var a = 'outer';

console.log(a); 
setScope(); 
console.log(a);

var setScope = function () {
  a = 'inner';
};
```

After hoisting:
```js
var a;
var setScope;
a = 'outer';

console.log(a); // 'outer'
setScope(); // Uncaught TypeError: setScope is not a function
console.log(a); 

setScope = function () {
  a = 'inner';
};
```

Line 410: When we call `setScope` as a function, JavaScript will raise a `TypeError`, since `setScope` is just a declared global variable that doesn't have a defined value.

Unlike function declarations, function expressions are effectively the same as assignment operations.

JS hoists only the variable names, not the function bodies.