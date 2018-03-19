// Please enter a phrase: walk
// // console output
// There are 4 characters in "walk".

// Please enter a phrase: walk, don't run
// // console output
// There are 15 characters in "walk, don't run".


var str = prompt('Please enter a phrase:');
var numOfChar = String(str.replace(/[^a-z]/gi, '').length);

console.log('There are ' + numOfChar + 
' characters in "' + str + '".');
