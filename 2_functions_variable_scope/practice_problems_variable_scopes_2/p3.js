var a; // hoisted to the top of the global scope
a = 'hello';

for (var i = 0; i < 5; i += 1) {
  a = i; // a gets assigned five times, it has a final value of 4
}

console.log(a); // 4