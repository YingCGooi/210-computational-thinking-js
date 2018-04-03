// The following program is expected to log each number between 0 and 9 (inclusive) that is a multiple of 3. Read through the code shown below. Will it produce the expected result? Why or why not?

var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// No, it will not produce the expected result.
// The expression i += 1 is only evaluated when the condition within if statement evaluates to false. This means that in any case that the condition evaluates to true, the value of i will stay the same, thus causing an infinite loop.
// In this case, since the value of i is initialized to 0, the conditional expression (i % 3 === 0) returns true, and 0 is logged as a result. i will never get incremented, so i will always be less than 10, causing infinite 0s to be logged.

var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  }

  i += 1;
}

var i;
for (i = 0; i < 10; i += 1) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
