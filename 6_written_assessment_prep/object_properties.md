### Property Names and Values
A property name for an object can be any valid string, and a property value can be any valid expression.

```js
var object = {
  a: 1, // a is a string with quotes omitted
  'foo': 2 + 1,
  'two words': 'this works too',
  true: true, // property name is implicitly converted to string
  b: { // an object as property value
    name: 'Jane',
    gender: 'female',
  },
  c: function () { //function expression
    return 2;
  },
};
```

### Accessing Property Values
You can access property values using 'dot notation' or 'bracket notation'

```js
var object = {
  a: 'hello',
  b: 'world',
};

object.a;                 // "hello", dot notation
object['b'];              // "world", bracket notation
object.c;                 // undefined when property is not defined
```



```js
var foo = {
  a: 1,
  good: true,
  'a name': 'hello',
  person: {
    name: 'Jane',
    gender: 'female',
  },
  c: function () {        // function expression as property value
    return 2;
  },
};

foo['a name'];            // "hello", use bracket notation when property name is an invalid identifier
foo['goo' + 'd'];         // true, bracket notation can take expressions
var a = 'a';
foo[a];                   // 1, bracket notation works with variables since they are expressions
foo.person.name;          // "Jane", dot notation can be chained to "dig into" nested objects
foo.c();                  // 2, Call the method 'c'
```


### Adding and Updating Properties
To add a new property, use 'dot notation' or 'bracket notation'

```js
var object = {};              // empty object

object.a = 'foo';
object.a;                     // "foo"

object['a name'] = 'hello';
object['a name'];             // "hello"

object;                       // { a: "foo", "a name": "hello" 
```

If the named property exists, the assignment updates the property's value:

```js
var object = {};

object.a = 'foo';
object.a;                    // "foo"

object.a = 'hello';
object.a;                    // "hello"

object['a'] = 'world';
object.a;                    // "world"
```

### Stepping Through Object Properties

We can iterate through object properties using the `for...in` loop

```js
var nick;

var nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

for (nick in nicknames) {
  console.log(nick);
  console.log(nicknames[nick]);
}

// logs on the console:
joseph
Joey
margaret
Maggie
```


### Array and Objects
We use an `Array` if we need to maintain data in a specific order.

We use an object if our data is more like an entity with many parts:
```js
{
  firstName: 'Joe',
  lastName: 'Smith',
  gender: 'Male',
  age: 30,
  married: false,
}
```

- involve "keyed" access
- use a key value to add, retrieve, modify, or delete a specific data item
- each key is associated with a specific datum
- sometimes referred as "associative array"

```js
var a = ['hello', 'world'];
// is equivalent to:
var a = {
  '0': 'hello',
  '1': 'world',
}

console.log(typeof a);        // "object"
console.log(a['1']);          // "world", object's bracket notation to access value
console.log(Object.keys(a));  // ["0", "1"], the keys of the object
```

`Object.keys()` is a method that returns an array of given object's enumerable properties.


### Arrays and the length property
JS built in methods `join`, `forEach`, `push`, `splice` take the value of `length` property into consideration.

- `Array.length` is always a non-negative integer less than 2^32
- The value of length property is one greater than the largest array index in the Array. The largest array index is represented by the Array's property name that has the largest non-negative interger value.
- The `length` property can be set explicitly.

```js
var myArray = [];
myArray.length;                  // returns 0

myArray = ['foo', 'bar', 'baz'];
myArray.indexOf('baz');          // returns 2 (this is the largest index)
myArray.length;                  // returns 3
```

This code demonstrates that:
- The length property is initially set to 0, a non-negative integer
- The length is one greater than the largest index

```js
var myArray = [];
myArray['foo'] = 'bar';
myArray[0] = 'baz';
myArray[1] = 'qux';

myArray[-1] = 'hello';
myArray[-2] = 'world';
myArray.length;               // returns 2
myArray.indexOf('hello');     // returns -1 since 'hello' is not in an element
myArray.indexOf('world');     // returns -1 since 'world' is not in an element

console.log(myArray);         // logs ['baz', 'qux', foo: 'bar', '-1': 'hello', '-2': 'world']
Object.keys(myArray).length;  // returns 5 (there are 5 keys at this point)
myArray.length;               // returns 2 (but only 2 keys are indexes)
```

Important points:
- When a property name is a non-negative integer, it is also an array index.
- values that are assigned to index properties are called elements of the array.
- Associated values of property names other than a non-negative integer are not considered to be elements of the array.
- `Array.prototype.indexOf()` returns `-1` for any value passed that is not an element of the array. This is true even if the value is associated with a non-index property.
- The value of `length` is always dependent on the largest array index. If the largest valid index is `1`, `length` returns `2`

- Logging an array logs all the indexed values and every `key: value` pair that the object contains. If the property value is not an element (not associated with a valid array index as its key), it logs the `key: value` pair.

- To count all properties in an Array object, user `Object.keys(array).length`. Do not use `array.length` as this will omit any non-element properties.

### Setting Length Property
```js
var myArray = [1, 2, 3];
myArray.length;         // returns 3

// setting to a larger value than the current largest array index
myArray.length = 5;
console.log(myArray);   // logs (5) [1, 2, 3, empty × 2] on Chrome Console
myArray.length;         // returns 5

myArray[6] = 'foo';
myArray.length;         // returns 7
console.log(myArray);   // logs (7) [1, 2, 3, empty × 3, "foo"] on Chrome Console

// setting to a smaller value than the current largest array index with value
myArray.length = 2;
console.log(myArray);   // logs [1, 2]

myArray.length = 5;
console.log(myArray);   // logs (5) [1, 2, empty × 3] on Chrome Console
                   
myArray.length;         // returns 5
```

Key points:
- The array loses data when you set the `length` property to value smaller than the current largest array index.
- Any elements that are associated with index values equal to or higher than the `length` property will be dropped.
- If the property name you use is an valid array index that's greater than the current largest array index, JS sets the `length` value to `1` greater than the array index you provided.

The `length` property not only count elements - the number of "empty slots" is also included in the count.

In other words, the value of `length` is not necessarily the same as the number of elements in an array.

### Object Operations
```js
var numbers = [4, 8, 1, 3];
2 < numbers.length;          // true
```

If you want to check whether an array has a certain index, compare it directly to the array's `length`. If a non-negative integer is less than the array's `length` property value, then it is a valid array index.

`Array.prototype.splice` is more ideal to remove a value from an Array instead of `delete`.

### Implicit Conversion in Comparisons
When one operand is an object and the other is not an object, JS coerces the object to the string `'[object Object]'`

```js
[] + {}; // "[object Object]" -- becomes "" + "[object Object]"
[] - {}; // NaN -- becomes "" - "[object Object]", then 0 - NaN
'[object Object]' == {};  // true
'' == {};                 // false
false == {};              // false
0 == {};                  // false
```

