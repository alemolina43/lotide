const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(obj, callBack) {
  for (let element in obj) {
    if (callBack(obj[element])) { //Iterate until the condition of the callback is met
      return element; //return the first key that meets said
    }
  }
};


//TEST CODE
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ), "noma"); // => should PASS

assertEqual(
  findKey(
    {
      banana: { color: "yellow" },
      pear: { color: "green" },
      orange: {color: "orange" },
      grapes: { color: "purple" }
    },
    (x) => x.color === "red"
  ), undefined);


module.exports = findKey;