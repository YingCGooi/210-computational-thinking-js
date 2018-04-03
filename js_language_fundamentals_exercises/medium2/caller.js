// The doubler function in the code below takes two arguments: a number to double and return, and a string containing the name of the function's caller.

function doubler(number, caller) {
  console.log('This function was called by ' + caller + '.');
  return number + number;
}

// doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.

function makeDoubler(caller) {
  return function (number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  }; // the returned anonymous function expressed assigned to doubler variable still retains access to the caller variable in its closure.
}

var doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.