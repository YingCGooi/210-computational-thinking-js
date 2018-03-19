function guess() {
  var password = 'password'
  var failedAttempts = 0;

  while (failedAttempts < 3) {
    var input = prompt('What is the password:');

    if (input === password) {
      console.log('You have successfully logged in.');
      return;
    }

    failedAttempts += 1;
  }

  console.log('You have been denied access.');
}

guess();

// loop construct
// within the loop, prompt user to enter password
// check the input agaist the password
// if the password is correct, log 'you have successfully logged in'
// if incorrect, increment the counter variable by one
// if the counter value is 3 or more, terminate the loop and deny user access