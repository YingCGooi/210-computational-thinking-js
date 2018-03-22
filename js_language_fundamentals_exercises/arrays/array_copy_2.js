// In the previous exercise, the value of the reference gets copied. For this exercise, only the values of the array should be copied, but not the reference. Implement two alternative ways of doing this.

// Here is the code from the previous exercise:
var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice(); // call the slice() method to return a shallow copy

myArray.pop();
console.log(myArray); // [1,2,3]
console.log(myOtherArray); // logs [ 1, 2, 3, 4 ]

myArray = [1, 2];
console.log(myOtherArray); // logs [ 1, 2, 3, 4 ]


// Alternative
var myArray = [1, 2, 3, 4];
var myOtherArray = [];
var i;

for (i = 0; i < myArray.length; i++) {
  myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myArray); // [1, 2, 3]
console.log(myOtherArray); // [1, 2, 3, 4]