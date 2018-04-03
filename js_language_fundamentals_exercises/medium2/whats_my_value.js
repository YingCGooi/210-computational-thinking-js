// What will the following program log to the console? Can you explain why?

var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
// array now becomes ['Apples', 'Peaches', 'Grapes', 3.4: 'Oranges']
console.log(array.length); // 3, unchanged, as no new element is assigned as a value to a valid array index
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
// array now becomes ['Apples', 'Peaches', 'Grapes', 3.4: 'Oranges', -2: 'Watermelon']
console.log(array.length); // 3
console.log(Object.keys(array).length); // 5

// arrays have a length property, while objects do not
// arrays have only non-negative integer values as keys
// and have an extra length property that keeps track of how many key-value pairs exist in the object

// "0", "1", "2" are the indices/keys/property names for "Apples", "Peaches", "Grapes"
console.log(array[0]);                // Apples
console.log(array[1]);                // Peaches
console.log(array[2]);                // Grapes
console.log(array['2']);              // Grapes

// "3.4" and "-2" are keys/property names that exist in the 'Array Object'
console.log(array[3.4]);              // Oranges
console.log(array[-2]);               // Watermelon
console.log(array['-2']);             // Watermelon