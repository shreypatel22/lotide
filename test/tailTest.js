const assertEqual = require('../assertEqual');
const tail = require('../tail');


// Test Cases
const test1 = tail(['One', 2, 'Three', 4]);
assertEqual(test1.length, 3);
assertEqual(test1[0], 2);
assertEqual(test1[1], 'Three');
assertEqual(test1[2], '4');

//  Check the original array
const test2 = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(test2);
console.log("Testing to see if original array was changed.");
assertEqual(test2.length, 3);

// More Test Cases
console.log("More Test Cases");
const test3 = [1];
assertEqual(tail(test3).length, 0);
const test4 = [];
assertEqual(tail(test4).length, 0);