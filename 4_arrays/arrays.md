### Arrays
- Basic collection
- Hold a list of values
- Indexed by non-negative integer value
- the sequence may not be important

Creating arrays with `Array` constructor.

```js
var count = new Array(1, 2, 3);

// Usually:
var count = [1, 2, 3];
```

Interactions:
- Iterating through the array and performing an action on each value
- accessing and manipulating specific elements of the Array

### Iterating through an array

```js
var count = [1, 2, 3, 4];
count.length; //3
var i;
for (i = 0; i < count.length; i += 1) {
  console.log(i);
}
```

In order to access the value of element, we use the bracket notation.

```js
var count = [1, 2, 3, 4];
var i;
for (i = 0; i < count.length; i += 1) {
  console.log(count[i]);
}
```

Bracket notation is an operator, not a method

### Accessing, Modifying and Detecting Values
The first element in an Array has index 0.

```js
var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];

fibonacci[0]; // 0
fibonacci[100]; // undefined

```

Adding values

```js
var count = [1, 2, 3];
count[3] = 4;
count; // [1, 2, 3, 4]
count.length;
count[5] = 5;
count[9] = 9;
count;            // [ 1, 2, 3, 4, undefined x 1, 5, undefined x 3, 9 ]
count[4];         // undefined
count.length;     // 10
```

If you skip indexes when assigning values to a location within an Array, JS automatically inserts `undefined` value in skipped positions.

Note that the `length` property returns a value that is one greater than the highest index.

You can also change the Array's length by assigning a new value to the `length` property:

```js
var count = [1, 2, 3];

count.length = 10;
count;            // [ 1, 2, 3, undefined x 7 ]
count.length = 2;
count;            // [ 1, 2 ]; excess elements are lost
```

### Arrays are Objects
```js
typeof []; // 'object'
```

If you need to determine whether a value is an Array, use `Array.isArray()`, it returns `true` when the argument is an Array, `false` if it is anything else.

```js
Array.isArray([]);        // true
Array.isArray('array');   // false
```
