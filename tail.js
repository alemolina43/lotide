const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};



// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
assertEqual(result.length, 2); //will return true
assertEqual(result[0], "Lighthouse"); // will return true
assertEqual(result[1], "Labs");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length, words.length - 1);
const emptyArr = [];
assertEqual(tail(emptyArr).length, 0);
const oneElement = [9];
assertEqual(tail(oneElement).length, 0);
