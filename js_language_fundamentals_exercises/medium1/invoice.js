// The invoiceTotal function in the code below computes the total amount for an invoice containing four "line items". How can you refactor the function so that it will work with invoices containing any number of line items?

function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?


function invoiceTotal() {
  var amounts = Object.values(arguments);

  return amounts.reduce( function(acc, amount) {
    return acc + amount;
  })
}

// Given solution
function invoiceTotal() {
  var total = 0;
  var i;

  for (i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }

  return total;
}

// In JS, it is possible to pass more or less arguments to a function than are explicity defined by its parameters, without raising an error.

// JS also has an `arguments` object that is available locally within all functions. The arguments obj is an array-like object that contains a list of every argument passed to the function.