## Intro to Objects

### Standard built-in objects
Built-in objects are `String`, `Array` ,`Object`, `Math`, `Date` and more.

For example when you apply `toUpperCase`, you are calling the method `toUpperCase` on a built-in `String` object.

JS has both primitive and object Strings. When you apply a method to a primitive, JS converts it to an object.

```js
var a = 'hi';                      // Create a primitive string with value "hi"
typeof a;                          // "string", this is a primitive string value

var stringObject = new String(a);  // Convert the primitive to an object
typeof stringObject;               // "object", this is a String object

stringObject.toUpperCase();        // Call the method on the object: "HI"
```

### Creating Custom Objects
You can create your own objects using the object literal notation.

```js
var colors = {
  red: '#f00',
  orange: '#ff0',
};

typeof colors; // 'object'
colors.red; // '#f00'
colors.orange; // '#ff0'

```


### Properties
Objects are containers for data and behavior.
Data consists of named items with values, in JS we call the associations between a key and value, properties.

To get the value of an object property, you can append a single dot followed by property name, to the object's name.

```js
var animal = 'turtle';
animal.length;          // 9

var colors = {
  red: '#f00',
  orange: '#ff0',
};

colors.red;             // "#f00"

'blue'.length;          // 4 - works with primitives too

// set a new value for a property with assignment
var count = [0, 1, 2, 3, 4];
count.length = 2;

colors.blue = '#00f';
```

### Methods
When functions are part of an object, we call them methods. You can access methods as though it is a property (it is). And call it by appending parentheses. You can pass arguments to method by listing them within the parentheses.

JS methods are Functions with some special behavior that we'll explore later.

```js
(5.234).toString();       // "5.234"
'pizza'.match(/z/);       // [ "z", index: 2, input: "pizza" ]
Math.ceil(8.675309);      // 9
Date.now();               // 1467918983610
```


Trailing commas are beneficial because:
- When repositioning contents of object literal, you just have to move the last entry to its new position
- without a trailing comma, adding a property shows up as 2 lines of changes when you run `git diff` (one line differs in the presense of new comma and the second line is the new item)

For one-line literals you don't need trailing comma.

```js
var coordinates = { x: 25, y: 50 };
```


