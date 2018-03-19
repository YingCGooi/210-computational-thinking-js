function isPrime(n) {
  var divisor;

  if (n <= 1 || (n > 2 && n % 2 === 0)) {
    return false;
  }

  divisor = 3;

  while (divisor < n) {
    if (n % divisor === 0) {
      return false;
    }

    divisor += 2;
  }

  return true;
}


function checkGoldbach(n) {
  if (n < 2) {
    return false; // guard clause
  }

  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }


  for(var first = 2; first <= n / 2; first++) {
    second = n - first;
    
    if(isPrime(first) && isPrime(second)) {
      console.log(String(first) + ' ' + String(second));
      isGoldbach = true;
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53