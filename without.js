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

const without = function(source, itemsRemoved) {
  let result = []; //store filter values
  for (let i = 0; i < source.length; i++) {
    let found = false;
    
    for (let j = 0; j < itemsRemoved.length; j++) {
      if (source[i] === itemsRemoved[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(source[i]);
    }
  } return result;
};


//test code
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["Hello"], ["Hello"]));
console.log(without(["Hello", "World", "Lighthouse"], ["Hello", "Lighthouse"]));

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
