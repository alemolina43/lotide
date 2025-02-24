const eqArrays = require("./eqArrays");


const assertArraysEqual = function(firstArr, secondArr) {
  return eqArrays(firstArr, secondArr) ? console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`) : console.log(`🛑🛑🛑 Assertion Failed: ${firstArr} !== ${secondArr}`);
};





module.exports = assertArraysEqual;