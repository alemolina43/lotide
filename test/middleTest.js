const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");



// test code


assertArraysEqual(middle([1, 2]), []); // => [] if the arrays has to values it should return empty
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [should pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should pass

assertArraysEqual(middle([1]), []); //should PASS
assertArraysEqual(middle([1, 2, 3, 4]), [1, 4]); //should FAIL
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //should PASS

const origArr = [1, 2, 3, 4, 5, 6, 7];
middle(origArr); //sould return 4
console.log(origArr); //the original array shoul not have changed