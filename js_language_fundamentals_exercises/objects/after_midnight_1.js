var MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(minuteOffset) {
  var midnight = new Date('1/1/2000 00:00');
  var newTime = midnight.getTime() + minuteOffset * MILLISECONDS_PER_MINUTE
  var afterMidnight = new Date(newTime);
  var hours = afterMidnight.getHours();
  var minutes = afterMidnight.getMinutes();

  console.log(String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0'));
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"