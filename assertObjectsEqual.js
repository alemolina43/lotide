const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects');

/**
 *
 * @param {object} actual
 * @param {object} expected
 * OUTPUT: log a message
 *
 */
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; // <= modify our function to use the util library's inspect function
  return eqObjects(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


//TEST CODE
const firstObj = {
  name: ["Ale", "Mike"],
  title: "parents"
};

const secondOnj = {
  name: ["Ale", "Mike"],
  title: "parents"
};

const otherObj = {
  name: ["Ale", "Mike"],
  title: "parents"
};

const secondOtherObj = {
  name: ["Lorena", "Peter"],
  title: "parents"
};
assertObjectsEqual(firstObj, secondOnj); //should PASS
assertObjectsEqual(otherObj, secondOtherObj); //should FAIL

module.exports = assertObjectsEqual;