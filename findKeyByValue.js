const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};
/**
 * This function finds a key by value
 * @param {Object} obj
 * @param {string} val
 * @returns the first key by a givent value for a Key
 */
const findKeyByValue = function(obj, val) {
  for (let element in obj) {
    if (obj[element] === val)
      return element;
  }
};

//scan the object
//return first key which contains the given value
//if no ley if found return undefined


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); // => should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "drama"), undefined);// => should PASS
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");// => should FAIL
