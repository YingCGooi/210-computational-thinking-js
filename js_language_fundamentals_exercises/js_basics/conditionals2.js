if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  } // Either condition2 returns true or not, one of the blocks within if(condition2) will be executed.
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}


// Path 1: condition1 --> condition2
// Path 2: condition1 --> not condition2
// Path 3: not condition1
// Path 4: not condition1 --> condition4
// Path 5: not condition1 --> condition4 --> condition5