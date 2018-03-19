var name = 'Bob';
var saveName = name;
name = 'Alice';
console.log(name, saveName);

// Alice Bob

var name = 'Bob';
var saveName = name; // 'Bob'
name.toUpperCase(); // 'BOB'
// calls String.prototype.toUpperCase
console.log(name, saveName);

// Bob Bob
// JavaScript coerces primitives into objects.
// This allow Javascipt to access the properties and method of that object prototype.
// The coercion is only temporary

// The secret life of js primitives
// Objects are aggregations of properties
// A property can reference an object or primitive
// Primitives are values and have no properties

typeof true; //"boolean"
typeof Boolean(true); //"boolean"
typeof new Boolean(true); //"object"
typeof (new Boolean(true)).valueOf(); //"boolean"