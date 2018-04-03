var myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // a
console.log(myArray[-1]); // undefined

myArray[-1] = 'd'; 
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // d
console.log(myArray['e']); // 5
console.log(myArray); // ['a', 'b', 'c', 'f', 'e': 5, '-1': 'd']

// On line 4, using -1 as an 'index' or key does not return the last value but returns undefined.
// if you take a look at the array logged on line 12, you can see that for any of its values, the key is also displayed when array is logged.