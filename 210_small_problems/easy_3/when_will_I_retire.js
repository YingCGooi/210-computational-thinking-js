// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// get user inputs
// calculate the differences between the inputs
// add the difference to the current year
// log result

var age = prompt('What is your age?');
var retireAge = prompt('At what age would you like to retire?');
var yearsToRetire = retireAge - age;

var currentYear = new Date().getFullYear();
var retireYear = year + yearsToRetire;

console.log("It's " + currentYear + '. You will retire in ' + retireYear + '.');
console.log('You have only ' + yearsToRetire + ' years of work to go!');