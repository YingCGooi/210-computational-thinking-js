### When to Use Arrays
- If your data is more like a list that contains many items
```js
['Monday', 'Tuesday', 'Wednesday'];
['Jan', 31, [2015, 2016]];
```

Interaction includes:
- Adding elements
- Retrieiving elements
- Modifying elements
- Removing elements
- Iterating over elements

### Object
Use object if your data is more like entity with many parts:

```js
{
  firstName: 'Joe',
  lastName: 'Smith',
  gender: 'Male',
  age: 30,
  married: false,
}
```

Most interactions involve keyed access:
- we use a key value to add, retrieve, modify or delete  a specific data item.
- we sometimes use the term 'associative array' to refer to objects

### Arrays are Objects

```js
var a = {
  '0': 'hello',
  '1': 'world',
};

console.log(typeof a);        // "object"
console.log(a['1']);          // "world", object's bracket notation to access value
console.log(Object.keys(a));  // ["0", "1"], the keys of the object!
```

### The Length Property
- The value is always a non-negative integer less than 2^32
- The value is numerically one greater than the largest array index
- If you take all property names from the Array that represent non-negative integer values, then the property name with the largest numeric value is the largest array index
- You can set the value of `length` property explicitly

```js
var myArray = [];
myArray.length;                  // returns 0

myArray = ['foo', 'bar', 'baz'];
myArray.indexOf('baz');          // returns 2 (this is the largest index)
myArray.length;                  // returns 3
```

`length` is one greater than the largest index (when the largest index is 2, the length is 3)

```js
var myArray = ['foo', 'bar'];
myArray[-1] = 'hello';
myArray[-2] = 'world';
myArray.length;               // returns 2
myArray.indexOf('hello');     // returns -1 since 'hello' is not in an element
                              // the fact that myArray[-1] is 'hello' is
                              // coincidental
myArray.indexOf('world');     // returns -1 since 'world' is not in an element

console.log(myArray);         // logs ['baz', 'qux', foo: 'bar', '-1': 'hello', '-2': 'world']
Object.keys(myArray).length;  // returns 5 (there are 5 keys at this point)
myArray.length;               // returns 2 (but only 2 keys are indexes)
```

- A property name is an array index, when it is a non-negative integer. All other property names and their associated values are not considered to be elements of the array.
- `Array.prototype.indexOf` returns `-1` if the value it is passed is not an element of array. This is true even if the value is associated with a non-index property.
- Value of `length` is dependent on the largest array index.
- The largest valid index is `1`, therefore `length` returns `2`
- Logging an array logs all indexed values and every `key: value` pair that the object contains. It logs only the value if it's associated with a valid array index. Otherwise it logs the `key: value` pair.
- To count all properties in an Array object, use `Object.keys(array).length`


### Setting the length property
```js
var myArray = [1, 2, 3];
myArray.length;         // returns 3

// setting to a larger value than the current largest array index
myArray.length = 5;
console.log(myArray);   // logs (5) [1, 2, 3, empty × 2] on Chrome Console
                        // logs [1, 2, 3, <2 empty slots>] on Firefox console
                        // logs [1, 2, 3, ,] on node REPL
myArray.length;         // returns 5
```

The array loses data when you set the `length` propery to a value smaller than the current largest array index.

If the property name you use in a bracket notation is a valid array index that's greater than the current largest array index, JS will set the `length` value to `1` greater than the array index you provided.

The value of `length` is not necessarily the same as the number of elements in the array.

### Using Object Operations with Arrays
Since arrays are objects, we can use `in` or `delete`

Using `in` operator to see whether an Object contains a specific key.
```js
0 in [];      // false
0 in [1];     // true
```

If you want to check to see whether an array has a certain index, compare it directly to array's `length`:

```js
var numbers = [4, 8, 1, 3];
2 < numbers.length;
```

Use Array.prototype.splice instead of delete.

Arithmetic and comparison operators are not very useful with objects, because they often lead to surprising results.