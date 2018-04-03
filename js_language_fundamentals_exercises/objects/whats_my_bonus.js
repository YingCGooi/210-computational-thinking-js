// The calculateBonus function calculates the bonus for a given salary. It makes use of two arguments for determining the bonus: a salary amount and a boolean switch. If the boolean is true, the bonus should be half of the salary; otherwise the bonus should be 0. Fill in the blanks in the function so that it will work, then explain why it works.

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

// The arguments object is available locally within the function, and contains properties with values assigned with arguments that was passed in to the function

// arguments contains a property for each every argument passed in to the function.