```js
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar); // 'This is global'
```

JavaScript uses lexical scope - it determines the scope of a variable by the structure of the program.

Line 2: The first variable declaration is outside of any function, giving the first `myVar` a global scope.

Line 5: The second variable declaration is inside of `someFunction`. Functions in JavaScript create a new scope - a scope that is "local" to the function. This local scope is also referred to as an "inner" scope in relation to the global "outer" scope.

On line 9: `console.log(myVar)` logs 'This is global' because the two `myVar` variables belong to different scopes.
The `myVar` declaration within the function has no effect on the global "outer" scope.

### Part 2
```js
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction(); // 'This is local'
```

The `console.log(myVar)` expression is located inside of the function.

There is a `myVar` variable initialized in the global scope (line 1) and in local scope (line 4).
Supposedly, variables in the global scope are accessible from anywhere in the program.

In this case, within `someFunction()`, JavaScript gives priority to the `myVar` in the local scope. Because it has the same name as the variable in the global scope, variable shadowing occurs and thus `myVar` cannot be accessed from within the local scope of the function.

### Part 3
```js
var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar); // 'This is local'
```

Line 42: This program only has one variable declaration, so there is only one `myVar variable instead of two.

Line 48 & Line 45: When `someFunction()` is invoked, it reassigns a new string to the global `myVar`.
This shows that variables in the global scope can be accessed and modified from within an inner scope.

### Part 4
```js
var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction(); // 'This is global'
```


When `console.log` tries to log the value of `myVar`, JavaScript first attempts to find attempts to find a variable with that name in the local scope of `someFunction`.

Since `myVar` does not exist in this scope, JS starts to lookup for `myVar` in the next outer scope, which happens to be the global scope in this case. Here, JS finds the global `myVar` and logs its value, "This is global"

If JavaScript reaches the outermost (global) scope without finding the variable, a `ReferenceError` will be raised.

```js
function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar); // logs 'This is global'
```

Line 77: Since there is no variable declaration for `myVar`, JS looks in the outer scope for the declaration. Since there's no declaration of the variable in the outer scope, JS binds `myVar` to be a "property" of the global object.