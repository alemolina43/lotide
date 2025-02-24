
const assertArraysEqual = require("../assertArraysEqual");




//test code
assertArraysEqual([1, 2, 3], [1, 2, 3]); //should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); //should fail
assertArraysEqual(["1", "2", "3"], [1, 2, "3"]); //should fail
assertArraysEqual(["3", "2", "1"], ["3", "2", "1"]); //should pass
assertArraysEqual([1, 2], [1, 2, 3]); //should fail
