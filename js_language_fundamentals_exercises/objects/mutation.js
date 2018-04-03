// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo', {'a': 1}];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

// for (i = 0; i < array1.length; i += 1) {
//   if (array1[i].startsWith('C')) {
//     array1[i] = array1[i].toUpperCase();
//   }
// }

array1[array1.length - 1]['a'] = 2;
console.log(array2); // ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'. {'a', 2}]

// the elements within array1 are string primitives, and thus immutable.

// Further Exploration
// When we copy the same object within array1 to array2, only the reference to the object is copied, so when the object in array1 is modified, array2 will see the change.