function debugIt() {
  var status = 'debugging'; // local variable status is declared
  function logger() {
    // any function that is declared within the same scope as the local variable will have access to it because of lexical scoping rules

    // logger is an inner (nested) function, so it has access to any variables declared in the scope of its outer (parent) function, debugIt, due to lexical scoping rules.
    console.log(status);
  }

  logger();
}

debugIt();

