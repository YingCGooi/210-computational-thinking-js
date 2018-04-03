### Property Names and Values
A property name for an object can be any valid string, property value can be any valid expression.

```js
var object = {
  a: 1,    // a is a string with quotes omitted
  'foo': 2 + 1,                  // property name with quotes
  'two words': 'this works too', // a two word string
  true: true,     // property name is implicitly converted to string "true"
  b: {            // object as property value
    name: 'Jane',
    gender: 'female',
  },
  c: function () {    // function expression as property value
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

object.a;    // "hello", dot notation
object['b']; // "world", bracket notation
object.c;    // undefined when property is not defined
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
  c: function () {  // function expression as property value
    return 2;
  },
};

foo['a name'];  // "hello", use bracket notation when property name is an invalid identifier
foo['goo' + 'd']; // true, bracket notation can take expressions
var a = 'a';
foo[a];    // 1, bracket notation works with variables since they are expressions
foo.person.name; // "Jane", dot notation can be chained to "dig into" nested objects
foo.c(); // 2, Call the method 'c'
```

When possible, use dot notation.

### Adding and Updating Properties

Use 'dot notation' or bracket notation add a new property to an object


```js

var object = {};

object.a = 'foo';
object.a;  // "foo"

object['a name'] = 'hello';
object['a name'];             // "hello"

object;                       // { a: "foo", "a name": "hello" }
```

The reserved keyword `delete` is used to delete properties from objects.


### Stepping through properties
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

```

Use `Object.keys()` to retrieve the names of all properties in an object.

```js
var nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

Object.keys(nicknames);  // [ 'joseph', 'margaret' ]
```

