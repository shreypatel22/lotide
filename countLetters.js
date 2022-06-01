// Function Declaration
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴🔴🔴Assertion failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = sentence => {
  let totalCount = {};
  for (let char of sentence) {
    if (totalCount[char]) {
      totalCount[char]++;
    } else {
      totalCount[char] = 1;
    }
  }  
  return totalCount;
};

// Test Cases
let test1 = 'LHL';
assertEqual(countLetters(test1)['L'], 2);
assertEqual(countLetters(test1)['H'], 1);

let test2 = 'This is a more complex test.';
assertEqual(countLetters(test2)['L'], undefined);
assertEqual(countLetters(test2)['i'], 2);
assertEqual(countLetters(test2)['o'], 2);