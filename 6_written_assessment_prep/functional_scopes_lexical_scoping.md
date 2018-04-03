```js
var name = 'Julian';

function greet() {
  console.log(name);
}
```

When we invoke the `greet()` Function, it has access to the `name` variable. The code within a Function inherits access to all variables in its surrounding scope. Function scopes nest inside each other.

```js
var name = 'Julian';

function greet() {
  function say() {
    console.log(name);
  }

  say();
}
```

`say` function can access the `name` variable even though `say` is nested inside `greet`. `greet` is nested in the outermost scope.

The code within one scope can access any variables in the same scope or any surrounding scope.

### Closures
Whenever we define a Function, it retains access to, or closes over the variable scope currently in effect.

This process is called creating a closure.

A closure retains references to everything that is in scope when the closure is created.

And retains those references for as long as the closure exists.

```js
var count = 1;

function logCount() {  // create a closure
  console.log(count);
}

logCount();            // logs: 1

count += 1;            // reassign count
logCount();            // closure sees new value for count; logs: 2
```

Line 1: A global variable `count` is declared and initialized to the value `1`.
_
`logCount();` The function `logCount()` is invoked.

Line 3: The declaration of function `logCount()` creates a closure. It closes over the variable scope at its current state and retains references to everything that is in the same scope or any surrounding scope.

Line 4: Since the function has access to variables in its surrounding scope, the `count` global variable is referenced here, returning the value `1`. `console.log()` then logs the value `1` to the console. Since no `return` statement is specified, the function returns `undefined`

Line 45: the `count` variable in the global scope is reassigned a value that is `1` greater than its original value, which is now `2`. `count` global variable now references `2`.

Line 46: When the function `logCount()` is invoked again, the closure that was created by it now sees the new value of the global variable `count` (which is now `2`), the old value is no longer available. Thus, `2` is logged to the screen.

```js
function lunch() {    // A Function declaration creates a new variable scope
  var food = 'taco';  // 1. Add a new variable food within the current variable scope
}
```

A function declaration creates a new variable scope.
A new local variable `food` is initialized within the current variable scope.

```js
function eat(food) {  // 2. Parameters create variables during Function invocation
  console.log('I am eating ' + food);
}
```

Arguments that are passed into a Function during invocation create local variables with the same name as the parameter names.

```js
function drink() {    // 3. Add a new variable drink within the global variable scope
  console.log('I am drinking a glass of water');
}
```

A function declaration creates a variable with the same name as the function.

### Variable Assignment
```js
var country = 'Spain';
function update() {
  country = 'Liechtenstein';
}

console.log(country);  // logs: Spain

update();
console.log(country);  // logs: Liechtenstein
```

`country = 'Liechtenstein';` JavaScript checks the current scope for a `country` variable, if no variable with the same name is found, JS checks its surrounding scopes until the first `country` variable is found, then reassigns it to `"Liechtenstein`.

```js
// no other code above
function assign() {
  var country1 = 'Liechtenstein';
  country2 = 'Spain';
}

assign();
console.log(country2);   // logs: Spain
console.log(country1);   // gets ReferenceError
// no other code below
```

If JS can't find a variable that has a matching name with a variable within the function, it creates a new global variable instead.

When a variable is referenced, JavaScript will first look for a variable with the same name in the current scope, then keep moving up through subsequent outer scopes until the variable is found. If JavaScript reaches the outermost (global) scope without finding the variable, a ReferenceError will be raised in most situations.

In the above, `country2` isn't declared anywhere else in the code and it is assigned a value inside the function. Since JS couldn't find a matching variable, it created a new 'global' variable with the value `'Spain'`.

### Variable Shadowing

```js
var name = 'Julian';

function greet() {
  var name = 'Logan'; // shadowing occurs
  console.log(name);
}
```

-
Line 124 `var name = 'Logan';`: 
The variable declaration for `name` in the `greet()` Function shadows the outer `name` variable. Within `greet()`, you can only access the inner `name`.

```js
var name = 'Julian';

function greet(name) {
  console.log(name);
}

greet('Sam');  // logs: Sam
```

_
Line 137 `console.log(name);`: The value referenced by `name` inside `greet` is not dependent on the value in the outer scope. Insteead, `name`  receives the value passed in as an argument to `greet()` during invocation.

This shows that if a function definition has a parameter with the same name as a variable in an outer scope, the parameter shadows the outer variable.

JS will throw a `ReferenceError` exception if it can't find a variable anywhere in the scope hierarchy.