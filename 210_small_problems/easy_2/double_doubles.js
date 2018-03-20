function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  }

  return number * 2;
}

function isDoubleNumber(number) {
  var stringNumber = String(number);
  var center = stringNumber.length / 2;
  var leftNumber = stringNumber.substring(0, center);
  var rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676