const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(firstArr, secondArr) {
  return eqArrays(firstArr, secondArr) ? console.log(`✅✅✅ Assertion Passed: ${firstArr} === ${secondArr}`) : console.log(`🛑🛑🛑 Assertion Failed: ${firstArr} !== ${secondArr}`);
};



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};



//TEST CODE


const results1 = map(words, (word) => word[0]);
console.log(results1);

const secondArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
assertArraysEqual(map(secondArr, (word => word.length)), [6, 7, 9, 8, 6]); //Should PASS
assertArraysEqual(map(words, (word) => word), ['ground', 'control', 'at', 'major', 'tom']); //should FAIL


module.exports = map;