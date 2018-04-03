### Mutability
Primitive types (numbers, string, booleans, `null` and `undefined`)

- Primitive values are immutable (operations on these values return a new value of the same type)
- Objects are mutable

We first declare a variable named `alpha` and set its value to the String 'abcde'

```js
var alpha = 'abcde';
```

`alpha` references or points to the value it contains
String is immutable and cannot be modified

```js
alpha[0] = 'z';     // "z"
alpha;              // "abcde"
```

`alpha[0] = 'z'` doesn't do anything except return the string 'z'. The problem here is that `alpha` contains a String, thus immutable.

### How a variable references an array
```js
alpha = ['a', 'b', 'c', 'd', 'e'];
```

`alpha` references the array containing 5 property names (array indices). Each of these indices point to a string primitive type.

Now let's try to change an element in an Array:

```js
alpha[0] = 'z'; // 'z'
alpha;   // [ "z", "b", "c", "d", "e" ]
```

Since Arrays are Objects and not primitive values. We are allowed tomodify the components (the elements) of the Array, but we are not able to change the identity of the array.

When we modify an element, the object that was previously referenced by the index will be garbage collected.

Consider the following code:

```js
function lessExcitable(text) {
  return text.replace(/!+/g, '.');  // replaces ! with .
}

var message = 'Hello!';
lessExcitable(message);             // "Hello."
message;                            // "Hello!"
```

Calling `replace` on a String returns a new String with a different value. This code doesn't modify the String referenced by `message`.

