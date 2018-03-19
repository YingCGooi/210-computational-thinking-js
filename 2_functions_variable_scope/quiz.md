## Q1
During execution, JS makes the arguments passed to a function available as local variables with the same names as the function's parameters.

If you are defining a function, you should use parameters; if you are invoking a function, you should use arguments.

## Q2
If the `return` statement does not include a return value, or there is no return statement, the function returns `undefined`

When calling a function, there can be more or fewer number of arguments passed

## Q3
Hoisting occurs when:
- JavaScript processes variable and function declarations within a scope before it executes any other code.

JavaScript doesn't move any code, it behaves as though code movement occurs. Since JS defines the variables first, it doesn't alter any code.

Function expressions aren't assigned to a variable when hoisting the variable. JS only gives the variable a value until it executes the line that assigns the function expression.

## Q4
Variable scope specifies how and where the language finds and retrieves values from declared variables.

Functions create a new scope in JS, while code blocks don't.

## Q5
Lexical scoping determines a variable's scope based on the structure of the code

Lexical scoping is called 'static scoping'

## Q6
```js
var foo = 1;
function bar() {
  var foo = 2;
  var qux = 5;
  return qux; // qux goes out of scope after this line
}

function foo() {}
bar();
```

Only `foo` and `bar` are in scope.
`foo` is a number (due to the hoisting of the function foo(), `foo` gets reassigned with 1 after the statement `var foo = 1`).
`bar()` returns the value of `qux`.

## Q7
```js
var foo = 1;

function foo() {}
```
The code snippet demonstrates dynamic typing. `foo`, which is initially assigned a function value is reassigned a number value.

## Q8
```js
function bar() {
  var foo = 2;
  console.log(foo);  // logs 2
}

var foo = 1;
bar(); // function is called after variable declaration and initialization
```

The `foo` in the body of the `bar` function is a local variable and is distinct from the `foo` in the global scope. We can say that `foo` in the `bar` function shadows the `foo` in the global scope.

## Q9
Function declarations with the same name replace the previously defined function.

## Q10
```js
function foo() {};
```

And

```js
var foo = function () {
  function bar() {};
};
```

Contains at least one function declaration.

## Q11
- A function expression can be used to define an anonymous function
- A function declaration that exists on the first line of a program will create at least one new variable
- All function declarations must have a name
- A function expression can be used to define an anonymous function

```js
(function () {});
```

