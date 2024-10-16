function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function AOM() {
      console.log("This is A.O.M");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is a Chelsea player");
    };
  }
  