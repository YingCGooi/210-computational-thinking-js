var MINUTES_PER_HOUR = 60;
var MS_PER_MINUTE = 60000;
var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;


function afterMidnight(string) {
  var hoursMinutes = string.split(':');
  var hours = Number(hoursMinutes[0]);
  var minutes = Number(hoursMinutes[1]);

  return minutes + hours * MINUTES_PER_HOUR;
}

function beforeMidnight(string) {
  var midnight = new Date('2000, 1, 2, 00:00');
  var beforeMidnight = new Date('2000, 1, 1 ' + string);
  var difference = midnight.getTime() - beforeMidnight.getTime();

  return (difference / MS_PER_MINUTE) % 1440;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686