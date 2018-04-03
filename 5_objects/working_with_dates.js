// Create a variable named today with the current date and time as its value.

var today = new Date();

function dateSuffix(date) {
  return String(date) + suffix(date);
}

function suffix(number) {
  var suffix;

  if ([11, 12, 13].indexOf(number) !== -1) {
    return 'th';
  }

  switch (number % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log("Today's date is " + day + ", " + month + ' ' + dateSuffix(date.getDate()))
}

formattedDate(today);

// Log the values returned from the getFullYear and getYear methods. Note how these values differ. Note especially that getYear is deprecated: you should avoid using deprecated methods as they may one day disappear.


console.log(today.getFullYear());
console.log(today.getYear());
console.log(today.getTime());

var tomorrow = new Date(today.getTime());
console.log(tomorrow.setDate(today.getDate() + 1));
formattedDate(tomorrow);

// Four ways to create a date
// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]);

// Using the Date.prototype.getTime() method makes it clear what is going on.

// Create a new variable named nextWeek that is a new Date copied from the today object. Compare nextWeek and today, and log the results. Are they equal? Why or why not?

var nextWeek = new Date(today.getTime());
console.log(nextWeek === today);
// The === operator only returns true if the objects are the same object. Since we have two different objects, we must instead compare the value represented by those objects.

console.log(nextWeek.toDateString() === today.toDateString());

nextWeek.setDate(today.getDate() + 7)
console.log(nextWeek.toDateString() === today.toDateString());

function formatTime(dateObj) {
  var hour = dateObj.getHours();
  var minutes = dateObj.getMinutes();

  console.log(addZero(hour) + ':' + addZero(minutes));
}

function addZero(value) {
  var timeComponent = String(value);
  return timeComponent.padStart(2, '0');
}

formatTime(today);