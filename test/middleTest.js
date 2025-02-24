const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");



// test code

console.log(middle([1])); // => [] since there is no values it returns empty
console.log(middle([1, 2])); // => [] if the arrays has to values it should return empty
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []); //should PASS
assertArraysEqual(middle([1, 2, 3, 4]), [1, 4]); //should FAIL
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //should PASS

const origArr = [1, 2, 3, 4, 5, 6, 7];
middle(origArr); //sould return 4
console.log(origArr); //the original array shoul not have changed