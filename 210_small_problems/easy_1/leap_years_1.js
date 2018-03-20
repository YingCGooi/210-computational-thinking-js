function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true


// Further Exploration
function isLeapYear(year) {
  if (year % 100 === 0) {
    return false; // if year is divisible by 400, this expression will be executed, therefore returning an incorrect false
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true; // if the year is divisble by 100, this expression will be executed, therefore returning an incorrect true
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 400 === 0;
  }
}