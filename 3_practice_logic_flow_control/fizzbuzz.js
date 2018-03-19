function fizzbuzz() {
  var message;

  for (var i = 1; i <= 100; i++) {
    message = i;

    if (i % 3 === 0 && i % 5 === 0) {
      message = 'FizzBuzz';
    } else if (i % 3 === 0) {
      message = 'Fizz';
    } else if (i % 5 === 0) {
      message = 'Buzz';
    }

    console.log(message);
  }
}

// refactored

function isMultiple(current, multiple) {
  return current % multiple === 0;
}

function fizzbuzz() {
  var message;

  for (var i = 1; i <= 100; i += 1) {
    message = '';

    if (isMultiple(i, 3)) {
      message += 'Fizz';
    }

    if (isMultiple(i, 5)) {
      message += 'Buzz';
    }

    console.log(message || i);
  }
}

fizzbuzz();