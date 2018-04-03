// In the following code, a user creates a person object literal and defines two methods for returning the person's first and last names. What is the result when the user tries out the code on the last line?

var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);
// logs [function: firstName] [function: lastName]

// Object literal methods must be called by appending parentheses.
// the string representation of the method definition will be returned if no parentheses is appended.
