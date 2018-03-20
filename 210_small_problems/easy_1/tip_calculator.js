// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will put in numbers.

function calculateTip() {
  var billAmount = parseInt(prompt('What is the bill?'), 10);
  var tipPercentage = parseInt(prompt('What is the tip percentage?'), 10);

  var tip = billAmount * (tipPercentage / 100);
  var total = billAmount + tip;

  console.log('The tip is $' + tip.toFixed(2));
  console.log('The total is $' + total.toFixed(2));
}

calculateTip();