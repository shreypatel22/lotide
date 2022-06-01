// Compare Arrays
const eqArrays = function(arrayOne, arrayTwo) {
  if(arrayOne.length !== arrayTwo.length){
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++){
    if (arrayOne[i] !== arrayTwo[i]){
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2) === true){
    console.log(`Passed -> [${array1}] === [${array2}]`);
  } else {
    console.log(`Failed -> [${array1}] !== [${array2}]`);
  }
};


// Test Cases (Passed)
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual([1, 1, 3], [1, 1, 3,]);
assertArraysEqual([], []);

assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1, 2]);