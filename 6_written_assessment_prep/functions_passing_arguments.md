### Function declaration
Function declaration has:
- The `function` keyword
- The name of the function
- A list of comma separated parameters
- A block of statements (the function body)

```js
function triple(number) {
  console.log('tripling in process...');
  return number + number + number;
}

// call function with a value argument
console.log(triple(5));                // logs 15

// call function with a variable argument
var someNumber = 5;
console.log(triple(someNumber));       // logs 15

// call function and store result in a variable
var result = triple(5);
console.log(result);                   // logs 15
```

The `triple` function takes one parameter called `number`.

It has two statements within its block.
The `return` statement specifies the value returned by the function.

On line 15: we call the `triple()` function, passing in the value `5` as an argument.

On line 9: the function declaration `triple()` takes one parameter called `number`. A local variable that is scoped to the function is initialized to the value of the argument that was passed in - in this case, `5`.

On line 10: `console.log()` is executed, logging 'tripling in process...'

On line 11: The expression `number + number + number` is evaluated and returns the value `15`. The `return` statement specifies to return the value of the evaluated expression as a value returned by the function. Thus, the function returns `15`.

On line 15: Since the function call `triple(5)` returns `15`, this value is passed in to `console.log()`. `15` is logged to the console. The value of `undefined` is returned.

### Parameters vs Arguments
```js
function multiply(a, b) { //  and b are called parameters
  return a * b; // when this run, they are called arguments
}
```

The function `multiply()` takes two parameters, `a` and `b`. `5` and `6` are the function's arguments:

```js
multiply(5, 6) // 5 and 6 are also arguments
```

During execution, arguments passed to a function is made available to the function as local variables with the same names as the function's parameters.

### Function Invocations and Arguments
The standard way to invoke a function is to append `()` to its name.

```js
function startle() {
  console.log('Yikes!');
}
```

Function names are local variables that happen to have a function as a value.

we can assign `startle` to a new local variable and call the function using that new name.

```js
var surprise = startle;
surprise();

// logs:
Yikes!
```

### Passing in arguments less than/more than specified

```js
function takeTwo(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b);
}
```

When we pass a single argument to `takeTwo`:
```js
takeTwo(1);

// logs:
1
undefined
NaN
```

1. Calling a function with not enough arguments does not raise an error.
2. Within a function, an argument that wasn't provided in the call will have the value `undefined`
3. The `NaN` result is caused by the face that `b` is `undefined`. It is JS standard behavior when a number and `undefined` are added.

You can also pass more arguments to a function than it expects and JS won't raise an error.
