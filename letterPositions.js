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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    //check if sentence is not an emty space
    if (sentence[i] !== " ") {
      
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i); //add the index as value of the key
    }
  }
  return results;
};


//test code
assertArraysEqual(Object.keys(letterPositions("")).length, 0); //should PASS
assertArraysEqual(letterPositions("hello").e, [1]); //should PASS
assertArraysEqual(letterPositions("How are you").o, [1, 9]); //should PASS
assertArraysEqual(letterPositions("Hi").i, [3]); //should FAIL