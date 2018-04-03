// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var age = randomBetween(20, 200);

var randomNum = 20 + Math.floor((201 - 20)*Math.random());
console.log(`Teddy is ${randomNum} years old!`);
// Teddy is 69 years old!

// Further
function randomBetween(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(200, 199));


function randomBetween(min, max) {
  return Math.round(20 + Math.random() * (max - min))
}

function between20And200() {
  return randomBetween(20, 200);
}

function trackRandom(times, func) {
  var results = {};
  var num;
  for (var i = 0; i < times; i++) {
    num = func();
    results[num] = results[num] || 0;
    results[num] += 1;
  }

  return results;
}

console.log(trackRandom(1000000, between20And200));