### Pure Functions and Side Effects
We call Functions that changes Objects passed to Function as arguments side effects.

When the function does not have any side effects, we call it side effects. Given the same argument, it will always evaluate to the same result.

A short pure function:

```js
function add(a, b) {
  return a + b;
}
```

This function has side effects:

```js
var sum = 0;
function add(a, b) {
  sum = a + b;
}
```

The second `add` Function changes the value of `sum`. This function is not pure.

```js
var currentTotal = 0;
function addToTotal(num) {
  return currentTotal + num;
}

addToTotal(5);      // returns 5

currentTotal = 5;

addToTotal(5);      // returns 10
```

The function above isn't a pure function because it does not return the same result given the same argument values(s).


### Pure Function Return Value vs Non-Pure Function Side Effects
If you use a function for its return value, you usually want the function call as part of an expression, or right hand side of an assignment.

```js
function joinString(a, b, c) {
  return a.concat(b, c);
}

var result = joinString('hello,', ' ', 'world!');
console.log(result);             // logs "hello, world!"
```

If you use a function for a side effect, try to pass the variables you will mutate as arguments.

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

We can change it to a pure function:
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

var deleted = removeElement(friends, 'David');    // ["Joe", "Mary"]
friends;                            // ["Joe", "Mary", "David"]
```
