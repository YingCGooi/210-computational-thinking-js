// Three ways to create a variable in the current scope.

function lunch() {
  // A function declaration creates a new variable scope
  var food = 'taco';
  // 1. Declare a new variable food within the current variable scope
}

function eat(food) {
  // 2. Parameters create variables during Function invocation
  console.log('I am eating ' + food);
}

function drink() {
  // 3. Add a new variable `drink` within the global variable scope
  console.log('I am drinking a glass of water');
}

// Variable Assignment
// variable scoping rules apply to both assignment and referecing.

country = 'Liechtenstein';
// checks the current scope and then each higher scope, looking for a variable with the name country.
// JS sets the first country variable it finds to "Leichtenstein".

var country = 'Spain';
function update() {
  country = 'Liechtenstein';
}

console.log(country);  // logs: Spain

update();
console.log(country);  // logs: Liechtenstein

console.log('===============')

// If JavaScript can't find a matching variable, it creates a new global variable instead.

// no other code above
function assign() {
  var country1 = 'Liechtenstein';
  country2 = 'Spain';
}

assign();
console.log(country2);   // logs: Spain
console.log(country1);   // gets ReferenceError, since country1 is initialized within an inner scope inside the body of function assign()
// no other code below

