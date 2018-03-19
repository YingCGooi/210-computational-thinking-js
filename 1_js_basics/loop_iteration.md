## Looping and Iteration

### The "while" loop
```js
while (condition) {

}

```

`while` loop evaluates the condition, executes the statements if the condition has a truthy value.

When execution hits the end of the block, control passess back to the condition expression again.

If the condition still has a truthy value, the statements in the loop body are evaluated again.

The process stops when the condition produces a falsey value.

```js
var counter = 0;
var limit = 10;

while (counter < limit) {
  console.log(counter);
  counter += 2;
}
```

### Infinite Loops
```js
var counter = 0;
var limit = 10;

while (counter < limit) {
  console.log(counter);
}
```

`counter < limit` will always return `true`, therefore the loop never stops.

### Break and Continue
The `break` statement exits from a loop immediately.

```js
var counter = 0;
var limit = 10;

while (true) {
  counter += 2;
  if (counter > limit) {
    break;
  }

  console.log(counter);
}
```

The `continue` statement skips the current iteration of a loop and returns to the top of the loop:

```js
var counter = 0;
var limit = 10;

while (true) {
  counter += 2;
  if (counter === 4) {
    continue;
  }

  if (counter > limit) {
    break;
  }

  console.log(counter);
}
```

### do...while loop
`do...while` always iterates at least once. It evaluates the conditionn after executing the loop body.

`while` loop won't iterate at all if the condition is falsey.

```js
var counter = 0;
var limit = 0;

do {
  console.log(counter);
  counter += 1;
} while (counter < limit);
```

### The 'for' loop
```js
for (initialExpression; condition; incrementExpression) {
  // statements
}
```

It combines 3 key elements of a loop: setting the initial state, evaluating a condition, and making some type of change.

Most `for` loops use an iterator is named `i` or `j`
```js
for (var i = 0; i < 10; i += 1) {
  console.log(i);
}
```

The flow of execution:
1. Execute the initialization statement.
2. Evaluate the condition, the loop terminates if the condition returns a falsey value
3. Execute the loop body
4. Execute the increment expression
5. Repeat from step 2

If you omit the condition component in the `for` loop, JS assumes it to be `true`.

```js
for (var i = 0; ; i += 1) {
  if (i >= 10) {
    break;
  }

  console.log(i);
}
```

You can also manually increment the iterator
```js
for (var i = 0; i < 10; ) {
  console.log(i);
  i += 1;
}
```

