const assertEqual = require("../assertEqual");
const tail = require("../tail");


// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
assertEqual(result.length, 2); //should Pass
assertEqual(result[0], "Lighthouse"); // should Pass
assertEqual(result[1], "Labs"); //should Pass

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length, words.length - 1); //should Pass

const emptyArr = [];
assertEqual(tail(emptyArr).length, 0); //should pass
const oneElement = [9];
assertEqual(tail(oneElement).length, 0); //should pass
