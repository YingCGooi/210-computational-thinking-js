var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]); // logs d
console.log(myObject[a]); // Reference error a is not defined
console.log(myObject.a);  // logs name

// In order to access value of property using bracket notation, the operand inside the references the property name (key) must be a string value.

// If it happens to be a number, JS converts to string through (Number.prototype.toString)

// `myObject[a]` raises a ReferenceError, since JS cannot find the value of var a since it has not been declared.