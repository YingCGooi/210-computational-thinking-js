var a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};


// with hoisting the above is equivalent to:
var a;
var setScope;

a = 'outer';

console.log(a);
setScope(); // TypeError: setScope is not a function
console.log(a);

setScope = function () {
  a = 'inner';
};