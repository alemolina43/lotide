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

const middle = function(arr) {
  let result = [];
  if (arr.length <= 2) {
    return result;
  } else if (arr.length % 2 === 0) {
    result.push(arr[(arr.length / 2) - 1]);
    result.push(arr[arr.length / 2]);
    return result;
  } else {
    return result.push(arr[Math.floor(arr.length / 2)]);
  }
};



// test code

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []); //should PASS
assertArraysEqual(middle([1, 2, 3, 4]), [1, 4]); //should FAIL
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //should PASS

const origArr = [1, 2, 3, 4, 5, 6, 7];
middle(origArr);
console.log(origArr);