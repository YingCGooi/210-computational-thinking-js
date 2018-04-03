### Pure Functions
Functions can mutate Objects passed to the Function as arguments. We call such changes side effects.

When a function doesn't have any side effects, we call it pure function.

Pure functions rely on their arguments to determine their return value. Given the same argument values, it will always evaluate to the same result.

```js
function add(a, b) {
  return a + b;
}
```

This function doesn't modify any external values

```js
var sum = 0;
function add(a, b) {
  sum = a + b;
}
```
This `add` function changes the value of `sum`. That is a side effect. Thus, this version of the function is not pure.

```js
var currentTotal = 0;
function addToTotal(num) {
  return currentTotal + num;
}

addToTotal(5);      // returns 5

currentTotal = 5;

addToTotal(5);      // returns 10
```

Since the reassignment of `currentTotal` to a different value affects the return value of the function, given the same argument. It is not a pure function.


If you use a function for its return value, you want the function call as part of an expression, or the right hand side of an assignment. The fact that it captures and uses the return value is a major clue.

```js
function joinString(a, b, c) {
  return a.concat(b, c);
}

var result = joinString('hello,', ' ', 'world!');
console.log(result);             // logs "hello, world!"
```

If you want to utilize the side effect of a function, try to pass the variables you will mutate as arguments:

```js
var friends = ['Joe', 'Mary', 'David'];

function removeElement(array, element) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] === element) {
      array.splice(i, 1);
    }
  }
}

removeElement(friends, 'David');     // undefined
friends;                             // ["Joe", "Mary"]

```

The function explicitly mutates the array passed as an argument. Note that the function call is not part of another expression.

Be mindful of all side effects that your functions can cause.

### Pure Function way of eliminating side effects

```js
var friends = ['Joe', 'Mary', 'David'];

function removeElement(array, element) {
  var newArray = [];
  var i;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] !== element) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

newFriends = removeElement(friends, 'David');    // ["Joe", "Mary"]
friends;                            // ["Joe", "Mary",
```

In this version, we build a new array and return it. This function has no side effects and is safer.
Of course, you have to use something like `friends = removeElement(friends, 'David')`