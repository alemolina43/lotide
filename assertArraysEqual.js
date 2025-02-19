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



assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(["3", "2", "1"], ["3", "2", "1"]);
