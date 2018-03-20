var SQMETERS_TO_SQFEET = 10.7639;
var convertedArea;
var convertedUnit;

var inputType = prompt('Enter input type (meters or feet):');
convertedUnit = (inputType === 'feet' ? 'meters' : 'feet');

var length = prompt(`Enter the length of the room in ${inputType}:`);
var width = prompt(`Enter the width of the room in ${inputType}:`)

var baseArea = parseInt(length, 10) * parseInt(width, 10);

if (inputType === 'meters') {
  convertedArea = baseArea * SQMETERS_TO_SQFEET;
} else if (inputType === 'feet') {
  convertedArea = baseArea / SQMETERS_TO_SQFEET;
}

console.log(`The area of the room is ${baseArea.toFixed(2)} square ${inputType}` +
`(${convertedArea.toFixed(2)} square ${convertedUnit}).`);