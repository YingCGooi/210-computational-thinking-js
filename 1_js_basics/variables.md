### Variables
Provides a way of associating data with descriptive names - containers that hold data.

### Naming Variables
Think hard about names, make sure that the name you assign is descriptive, accurate and understandable

Guidelines:
- JS is case sensitive (myVar is different from myvar)
- Can be any length
- Start with a unicode, an underscore, or dollar sign
- Must not be a reserved word
- Must be unicode letters, numbers or underscores

valid:
```js
_count
$price
value
my_variable
otherVariable
```

Invalid:
```js
1count
my#variable
```

### Declaring Variables
Vars are declared using `var` keyword.

```js
var myVariable;
var otherVariable;
var anotherVariable;
```

### Variable Assignment

```js
var number;
number = 3; // variable `number` is assigned with value 3
```

Combining var declaration with initializing assignment:
```js
// multiple declarations and initializations
var myVariable = 'Hello, World';
var otherVariable = 23;
var anotherVariable = true;
```

Any variable that is declared but not assigned a value will be initialized to the value `undefined`.

### Dynamic Typing
A variable can hold reference to any data type, and can be ressigned a different type.

```js
// initialize to a string
var myVariable = 'Hello, World';

// reassign to a number
myVariable = 23;

// now the variable holds a number value
myVariable;      // 23
```

