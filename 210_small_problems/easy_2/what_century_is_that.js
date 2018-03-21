function century(year) {
  var centuryNum = Math.ceil(year / 100);
  
  return String(centuryNum) + centuryOrdinal(centuryNum);
}

function centuryOrdinal(num) {
  var lastTwo = num % 100;
  var i;

  for (i = 11; i <= 13; i++) {
    if (lastTwo === i) {
      return 'th';
    }
  }

  switch (lastTwo % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));          // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"