### Function Declarations/Function Expressions

```js
function hello() {
  return 'hello world!';
}

console.log(typeof hello);    // function
```

A function declaration defines a variable. In this case, `hello` whose type is `function`, does not require assignment to a variable.

The value of the function variable is the function itself. This functional variable obeys general scoping rules, we can use it like other JS variables.

```js
function outer() {
  function hello() {
    return 'hello world!';
  }

  return hello();
}

console.log(typeof hello);    // can't access a local scope from here

var foo = outer;              // assign the function to another variable
foo();                        // we can then use it to invoke the function
```

Line 24: `typeof` operator is used with the `hello` variable, since `hello` points to a function within the inner scope of function `outer()`, it is inaccessible from the outer (global) scope, therefore `typeof` returns 'undefined'.

Line 26: we declare a global variable `foo` and  initialize it to the function referenced by `outer`.

Line 27: We can then use `foo` to invoke the function.

function declarations create functional variables that are scoped within the body of the function. For every function declaration, a variable is initialized.

```js
var stringVar = 'string reference';
var numberVar = 42;                      // number reference

function functionVar() {
  return 'function reference';
}

console.log(typeof stringVar);           // string
console.log(typeof numberVar);           // number
console.log(typeof functionVar);         // function

// Reassignment works as expected:
stringVar   = functionVar;               // `stringVar` now references a function
functionVar = 'string reference';        // `functionVar` now references a string

console.log(typeof stringVar);           // function
console.log(typeof functionVar);         // string
```

### Function Expressions

```js
var hello = function () {
  return 'hello';
};

console.log(typeof hello);    // function
console.log(hello());         // hello
```

Line 61: the global variable `hello` is initialized to an anonymous function.

Line 65: `typeof` operator is executed with `hello`, since `hello` references an anonymous function, 'function' is returned.

Line 66: we invoke the function `hello()` by using the variable.

```js
var foo = function () {
  return function () {   // function expression as return value
    return 1;
  };
};

var bar = foo();         // bar is assigned to the returned function

bar();                   // 1
```

The function `foo` returns an anonymous function. On line 82, we call `foo` and assign the returned function expression to bar.

We can then call `bar` to return the value of `1` from the anonymous function.

### Named Function Expressions
```js
var hello = function foo() {
  console.log(typeof foo);   // function
};

hello();

foo();                       // Uncaught ReferenceError: foo is not defined
```

When we name function expressions, the name can only be referenced from within the function's local scope. Named function expressions are useful for debugging. The debugger can show the function's name in the call stack and provide a valuable clue.

Differences with a function declaration:
- if a statement begins with the `function` keyword, then it is a function declaration
- otherwise it is a function expression.


```js
function foo() {
  console.log('function declaration');
}

(function bar() {
  console.log('function expression');
});

foo();    // function declaration
bar();    // Uncaught ReferenceError: bar is not defined
```

When the a function is enclosed with parentheses, it is turned into a function expression. Thus, if we try to invoke `bar()`, we can see that it is not defined.

The following function definitions both define:
- a named function and,
- a variable with the same name as that function.

```js
var foo = function foo() {
  return 'a named function expression assigned to a variable';
};

function bar() {
  return 'a function declaration';
}
```

A function defined using a declaration must always have a name - it cannot be anonymous. 

A function declaration also creates a variable with the same name as that function's name.

