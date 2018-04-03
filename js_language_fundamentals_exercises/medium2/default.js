// The processOrder function shown below accepts the following arguments: price, quantity, discount, serviceCharge and tax. Any arguments other than price may be omitted when calling the function, in which case, default values will be assigned.

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100));      // 126.5

// This function uses conditional statements to test whether arguments have been omitted. When an argument is omitted, JavaScript automatically initializes it to a value of undefined. The function takes advantage of this behavior by setting undefined arguments to a default value.

// The following variation of the processOrder function has the same behavior as the first:

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100, 0, 0, 0, 0))

// However, both of these solutions have a limitation that can lead to an incorrect result for certain inputs. What is this limitation and how does it affect the result?

// The limitation is that if any of the inputs are 0, the conditional expression will consider it as a falsy value, thus the second operand will be returned instead of the intended 0 value.

// The function will incorrectly treat that argument as if it has been omitted.

processOrder(100, 2, 0.1, 0, 0);      // 227.7 -- incorrect result!

// any arguments with a value of 0 get reassigned a default value.
// one way is to explicitly test whether the input arguments have a value of undefined, instead of relying on them being falsy `(quantity === undefined)