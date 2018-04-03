### Array Copy

```js
var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray); // [1, 2, 3]

myArray = [1, 2];
console.log(myOtherArray); // [1, 2, 3]
```

Line 4: A global variable `myArray` is declared and initialized to an array `[1, 2, 3, 4]`
Line 5: Another global variable `myOtherArray` is declared and initialized to the same array referenced by `myArray`. Now, both `myOtherArray` and `myArray` points to the same reference of the array object.

Line 7: Since a JavaScript array is also an object, it is mutable. When we call the method `pop()` on `myArray`, the last element of the array stored by `myArray` is removed. Since the value stored in the variable `myArray` is a reference to the location of the value and not the value itself, `myArray` mirrors the change. Both `myArray` and `myOtherArray` are now referencing the original, but modified array `[1, 2, 3]`. 

Line 8: `myOtherArray` references the original modified array, therefore `'[ 1, 2, 3 ]'` is logged to the console when `console.log()` is called.

Line 10: `myArray` is reassigned a new value of array `[1, 2]`, which does not affect `myOtherArray`. 
Line 11: `myOtherArray` still references the original modified array, `'[ 1, 2, 3 ]'` will be logged to the console when `console.log()` is called.

Both variables now have different reference values stored, so any future mutations of `myArray` will no longer affect `myOtherArray` and vice versa.
```js
myArray.pop();
console.log(myArray);         // [1]
console.log(myOtherArray);    // [1, 2, 3] -- not mutated
```

### Array Copy 2
```js
var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
```

We can either make use of a loop to iterate over `myArray` to get the values at the respective indices, and pushes each value to the new array `myOtherArray`, or:

Leverage the `Array.prototype.slice()` method to return a new array object with its contents copied, and consequently a new reference value.
_
`Array.prototype.slice.call(argument)`  -
We are borrowing the `slice` method from the `Array` global object. When we apply `slice` to the `arguments` object, it creates an Array that contains the same values as those present in the `arguments`.