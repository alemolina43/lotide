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



assertArraysEqual(without(["Hello"], ["Hello"]), []); //should pass
assertArraysEqual(without(["Hello", "World", "Lighthouse"], ["Hello", "Lighthouse"]), ["World"]); //should pass
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["3", "4"]); //should fail

// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); //should pass



module.exports = without;