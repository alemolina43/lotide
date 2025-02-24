const head = require("../head");
const assertEqual = require("../assertEqual");

//TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([4, 5, 7, 8, 9]), 4);
assertEqual(head([2]), 2); //should PASS
assertEqual(head([]), undefined); //should PASS
