// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

function swapName(name) {
  var firstName;
  var lastName;
  [firstName, lastName] = name.split(' ');

  return lastName + ', ' + firstName;
}

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

// Further Exploration
function swapName(name) {
  var splitNames = name.split(' ');
  var lastName = splitNames.splice(-1);
  var firstName = splitNames.join(' ');

  return lastName + ', ' + firstName;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

console.log(swapName('Joe George Roberts')); // "Roberts, Joe George"