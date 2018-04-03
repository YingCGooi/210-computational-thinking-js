### Working with Function Arguments Object

The `arguments` object is an Array-like local variable, available inside all Functions. It contains arguments passed to the Function.

```js
function logArgs(a) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments.length);
}

logArgs(1, 'a');

// logs:
1
a
2
```

`arguments` was Array-like, but not a real Array.
We can access argument values using the same bracket notation, unfortunately this is where the similarities between `arguments` and Arrays end.

```js
function logArgs() {
  console.log(typeof arguments);
  console.log(Array.isArray(arguments));
  var a = arguments.pop();
}

logArgs(1, 2);

// logs:
object       // arguments is an "object"
false        // but it is not an Array
TypeError: Object #<Object> has no method 'pop' // and it doesn't have the usual Array methods
```

To create an Array from the `arguments` object:

```
var args = Array.prototype.slice.call(arguments);
```

We are 'borrowing' the `slice` method from the `Array` global object. When we apply `slice` to the `arguments`, it creates an Array that contains the same values as those in `arguments`.

```js
function logArgs() {
  var args = Array.prototype.slice.call(arguments);
  console.log(typeof args);
  console.log(Array.isArray(args));
  var a = args.pop();
};

logArgs(1, 2);

// logs:
object
true         // args is a proper Array now
```

### Function that Accept Any Number of Arguments
We can define a Function that will sum up any number of arguments that was passed in.