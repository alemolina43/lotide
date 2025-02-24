const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function(obj1, obj2) {
  const keysOfObj1 = Object.keys(obj1);
  const keysOfObj2 = Object.keys(obj2);

  //if the keys.length is not the same, stop and return false
  if (keysOfObj1.length !== keysOfObj2.length) {
    return false;
  }

  for (let key of keysOfObj1) {

    //if the value of both keys is an array, evaluate using eqArrays
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
      continue;
    }

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};


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