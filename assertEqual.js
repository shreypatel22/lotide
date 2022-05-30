// Function Declaration
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: [${actual}] !== [${expected}]`);
  }
};


// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('Same', 'Same');
assertEqual(2, 33);