// Conditionals are set of commands triggered when a condition is true.

// if...else and switch are supported

// if...else
var score = 80;

if (score > 70) {
  console.log('Congratulations, you passed!');
}

// score > 70 is an expression that evaluates to a boolean
// in this case it evaluates to true.
// if (score > 70) is a conditional statement. When this is true, the block of ode following the condition runs.
// { console.log('Congratulations, you passed!' )} is a block.
// A block group statements and delimited by curly braces, they may have zero or more statements in them

if (score > 70) {
  console.log('Congratulations, you passed!');
} else {
  console.log('Sorry, but you need to study more!')
}

// if statement may follow an else statement; this lets you test multiple conditions. Only the first conditional statement that evaluates as true executes.

if (condition1) {
  // statements
} else if (condition2) {
  // statements
} else if (conditionN) {
  // statements
} else {
  // statements
}

// if statements may also be nested inside another `if`. 

if (condition1) {
  if (nestedCondition) {
    // statements
  } else {
    // statements
  }
} else if (condition2) {
  // statements
}

// Truthy and Falsy
if (false) // falsy
if (null) // falsy
if (undefined) // falsy
if (0) // falsy
if (NaN) // falsy
if ('') // falsy

// The other values are truthy
if (true) // truthy
if (1) // truthy
if ('abc') // truthy
if ([]) // truthy
if ({}) // truthy

// Example
1 || 2; // 1
1 && 2; // 2

if (1 || 2) // truthy
if (1 && 2) // truthy

// Switch
// switch statement compares an expression with multiple case labels, the statements following the matched case label execute.

var reaction = 'negative';

switch (reaction) {
  case 'positive':
    console.log('The sentiment of the market is positive');
  case 'negative':
    console.log('The sentiment of the market is negative');
  case 'undecided':
    console.log('The sentiment of the market is undecided');
  default:
    console.log('The market has not reacted enough');
}

// The program looks for the first case label that matches. However, compared to the if statement, the switch will continue to the next cases until it reaches the default clause or a break statement.

// The execution 'falls through' to the next case. Many people believe this is a defect, you want to execute one of the case branches.

// To correct, insert a break in each case statement.
var reaction = 'negative';

switch (reaction) {
  case 'positive':
    console.log('The sentiment of the market is positive');
    break;
  case 'negative':
    console.log('The sentiment of the market is negative');
    break;
  case 'undecided':
    console.log('The sentiment of the market is undecided');
    break;
  default:
    console.log('The market has not reacted enough');
}

// console output
// The sentiment of the market is negative


// Comparing values with NaN
// NaN is a special value in JS that represents an illegal operation on numbers.
console.log(Number('abc'));  // NaN
console.log(Math.sqrt(-1));  // NaN
console.log(undefined + 1);  // NaN

// NaN stands for Not a Number
// A problem features of NaN is that comparing it with any value evaluates to false.
console.log(NaN === NaN);    // false

// isNaN function returns true if a value is not number, false otherwise.
var foo = NaN;
console.log(isNaN(foo)); // true

// isNaN returns true for any value that is not numeric.

// simple solution to tell whether a value is NaN
function isValueNan(value) {
  return value !== value;
}

// alternative solution makes an explicit check that the argument is numeric.
function isValueNaN(value) {
  return typeof value === 'number' && isNaN(value);
}

