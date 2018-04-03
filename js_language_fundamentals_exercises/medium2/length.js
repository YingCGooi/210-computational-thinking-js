// Read through the code below. What values will be logged to the console? Can you explain these results?

var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4; // empty slots will be added to the array if the length property exceeds the number of original elements in the array
console.log(languages); // ['JavaScript', 'Ruby', 'Python', empty x1]
console.log(languages.length); // 4

languages.length = 1; // elements will be deleted from the last position, until the number of elements is the same as the value of 'length' property
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', empty x 2]
console.log(languages.length); // 3

languages.length = 1; // ['JavaScript']
languages[2] = 'Python'; 
console.log(languages); // ['JavaScript', empty, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

// length property can be explicitly set
// setting the length to a value that is less than the current length truncates the array
// resetting the length to a higher value does not bring back the truncated elements, but instead create empty slots in the array. The number of actual elements does not increase
// the value of the length is always equal to the last index plus 1, adding an element to index 2 of a one-element array changes the array's length to 3, even though the array has two actual elements.

// Arrays with empty slots are referred to as 'sparse arrays'

