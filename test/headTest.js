const head = require('../head');
const assertEqual = require("../assertEqual");


// Test Cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['1',2,3]), 1);
assertEqual(head([99]), 99);
assertEqual(head([]), undefined);