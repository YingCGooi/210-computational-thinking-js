function isXor(arg1, arg2) {
  bool1 = !!arg1;
  bool2 = !!arg2;

  return (bool1 === true && bool2 === false || bool1 === false && bool2 === true);
}

function isXor(value1, value2) {
  if (value1 && !value2) {
    return true;
  }

  if (!value1 && value2) {
    return true;
  }

  return false;
}

// concise solution

function isXor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1)); // !! guarantees that the result is boolean
}

// alternative solution2

function isXor(value1, value2) {
  return Boolean(value1) !== Boolean(value2);
}

console.log(isXor(false, true));
console.log(isXor(true, false));
console.log(isXor(false, false));
console.log(isXor(true, true));

console.log(isXor(false, 3));
console.log(isXor('a', undefined));
console.log(isXor(null, ''));
console.log(isXor('2', 23));