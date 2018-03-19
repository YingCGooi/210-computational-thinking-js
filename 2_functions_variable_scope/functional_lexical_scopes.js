// In Javascript, every function creates a new variable scope.

// Global Scope

var name = 'Julian';
console.log(name);

for (var i = 0; i < 3; i += 1) {
  console.log(name);
}

console.log(name);

// adding a function
function greet() {
  console.log('greet is called! ' + name);
}

// greet() can access the `name` variable
greet();

// Function scopes nest inside each other, the code within one scope can access any variables in the same scope or any surrounding scope

var nickname = 'Jul';

function greetNickname() {
  function say() {
    var inner = 'hello world'; // variables in inner scope cannot be accessed in any scopes outside of the function say();
    console.log(nickname);
  }

  say();
}

greetNickname();


// Lexical Scoping
// The source code defines the scope
// There is a hierarchy of scopes from the local scope of the code
// JavaScript searches this hierarchy from the bottom to the top. It stops and returns the first variable it finds with a matching name.

// also called static scoping.