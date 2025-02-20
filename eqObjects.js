const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

/**
 * INPUT: 2 objects
 * OUTPUT: bolean
 * Returns true if both objects have identical keys with identical values.
 */
const eqObjects = function(obj1, obj2) {
  const keysOfObj1 = Object.keys(obj1);
  const keysOfObj2 = Object.keys(obj2);

  //if the keys.length is not the same, stop and return false
  if (keysOfObj1.length !== keysOfObj2.length) {
    return false;
  }
  for (let key of keysOfObj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};


//TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // should PASS


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);// => should PASS
