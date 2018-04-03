var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]); // 678
console.log(myObject.prop2); // 456

// Further Exploration
var myObj = {};
myObj[myFunc()] = 'hello, '; // the program invokes the function with parentheses within the brackets, myFunc return 'funcProp', so the name of the property is 'funcProp'

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // { funcProp: 'hello, ' }
myObj[myFunc()] = 'world!';
console.log(myObj); // { funcProp: 'world!' }

