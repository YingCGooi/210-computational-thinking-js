### Defining Functions
Most programming languages let you build constructs called procedures, they allow you to extract common code to one place and use it anywhere within your code.
In JS, the term functions refer to procedures.

If the function does not contain an explicit `return`, the function implicity returns the value `undefined`.

We say functions to "have returned".

### Parameters vs Arguments
```js
function multiply(a, b) {
  return a * b;
}
```

The function `multiple()` takes two parameters, `a` and `b`.
We call the actual values passed to a function its arguments.

```js
multiply(5, 6);         // returns 30
```
`5` and `6` are function's arguments.

JavaScript makes the arguments passed to a function available to the function as local variables with same names as its parameters.
Within its body, we call these local variable arguments.

When:
- Defining a function: use parameters
- Invoking a function: use arguments

```js
// When we define the function, a and b are called parameters.
function multiply(a, b) {
  // When this code runs, they are called arguments.
  return a * b;
}

multiply(5, 6);  // 5 and 6 are also arguments
```


