const assertEqual = function(actual, expected) {
  console.assert(
    actual === expected,
    `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  );
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

