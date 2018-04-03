### Hoisting
**Hoisting for variable declarations**
JavaScript hoists only variable declarations, not assignments.
_
**Hoisting for Function Declarations**
JS hoists Function declarations to the top of the scope, it hoists the entire function including its body.
_
**Hoisting for Function Expressions**
Function expressions often involve assigning a function to a declared variable.

They obey the hoisting rules for variable declarations:
Only the variable declaration is hoisted, the associated function is not hoisted.
_
**Hoisting Variable and Function Declarations**
When both a variable and a function declaration exist, the function declaration is hoisted first.

```js
bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}
```

is equivalent to:

```js
function bar() {
  console.log(foo);
}

var foo;

bar();          // logs undefined
foo = 'hello';
```

Line 35: invocation of `bar()`
Lines 29-30: the function `bar` references a variable `foo` that is in the global scope. Since there are no previous definition of `foo`, `undefined` is returned by `foo` and output to the console. Since there is no `return` statement, the function returns `undefined`.

#### Snippet #1
If the same name is used for a variable and a function:
```js
bar();             // logs "world"
var bar = 'hello';

function bar() {
  console.log('world');
}
```

becomes:

```js
function bar() {
  console.log('world');
}
var bar; // redundant

bar();
bar = 'hello';
```

#### Snippet #2
```js
var bar = 'hello';
bar();             // raises "Uncaught TypeError: bar is not a function"

function bar() {
  console.log('world');
}
```

becomes:

```js
function bar() {
  console.log('world');
}

bar = 'hello'; // reassignment
bar();
```

The variable declaration of the same name becomes redundant and effectively becomes a reassignment. Since `bar` will no longer be of type `function`, it results in an error

Line 82: `bar` is reassigned to the value 'hello'
Line 83: Since `bar` is no longer will be of type `function`, this results in an error when we try to invoke `bar`.

