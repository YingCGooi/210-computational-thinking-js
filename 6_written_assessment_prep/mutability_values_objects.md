### Mutability of Values and Objects

The distinction between primitive values and Objects is mutability.

- Primitive values are immutable, operations on these values return a new value of the same type
- Objects are mutable - objects contain data inside themselves, which can be modified.

```js
alpha[0] = 'z';     // "z"
alpha;              // "abcde"
```

`alpha[0] = 'z'` will return the string `'z'`.
`alpha` references a String, which is a primitive type and hence immutable

```js
alpha = ['a', 'b', 'c', 'd', 'e'];
alpha[0] = 'z';       // "z"
alpha;                // [ "z", "b", "c", "d", "e" ]
```

Since Arrays are Objects and not primitive values, we can change the components of the Array. This does not change the identity of the array. The element `0` - the `0` property of `alpha` now points to a new String; the old value no longer belongs to `alpha`; it is no longer referenced and will be garbage collected.

