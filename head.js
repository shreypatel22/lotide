// Function Declarations
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: [${actual}] !== [${expected}]`);
  }
};

const head = function(array) {
  return array[0];
};

// Test Cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['1',2,3]), 1);
assertEqual(head([99]), 99);
assertEqual(head([]), undefined);