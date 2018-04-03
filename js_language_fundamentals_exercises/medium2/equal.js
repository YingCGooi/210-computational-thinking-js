// Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.

var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// This is due to the fact that both variables point to different objects in JS.
// Even when two objects have the same properties and property values, in JS they are treated as different object.
// When the equality or strict equality operator is used to compare between them, the conditional expression will always return false.

// The code can be fixed by ensuring two variables reference the same object instead of two different objects.

var person = { name: 'Victor' };
var otherPerson = person;

console.log(person === otherPerson);    // true

// every object literal creates a new object.
// When the object is assigned to a variable, a reference to the object is stored.
