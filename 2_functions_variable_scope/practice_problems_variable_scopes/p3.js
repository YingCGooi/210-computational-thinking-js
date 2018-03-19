var basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket); // the global variable basket still retains its original value, empty

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    console.log(basket); // playstation
  }

  shop1(); // function call changes basket to tv
  shop2(); // function call changes basket to computer
  shop3(); // does not alter the value of the basket global variable, but defines and sets a local variable with the same name, logs 'play station' because of variable shadowing

  console.log(basket); // the local variable basket goes away, logs global variable computer
}

goShopping();
// logs:
// empty
// play station
// computer