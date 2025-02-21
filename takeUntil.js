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


const takeUntil = function(array, callback) {
  const results = [];
  //iterate though the array until the condition of the call back funtoon is met
  for (let word of array) {
    if (callback(word)) {
      return results; //stop looping one the condition is met
    }
    results.push(word); //add elements to the results array
  }
  return results; //if the condition is not met return all the elements in the original array
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0); // [1, 2, 5, 7, 2]
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ','); // ["I've", "been", "to", "Hollywood"]
console.log(results2);

assertArraysEqual(takeUntil(data2, x => x === ","), ["I've", "been", "to", "Hollywood"]);// should PASS

assertArraysEqual(takeUntil(["testing", "my", "function"], x => x.length < 3), ['testing']); //should PASS
