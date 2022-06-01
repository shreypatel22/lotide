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

const assertArraysEqual = function(array1, array2, expected) {
  if(eqArrays(array1, array2) === expected){
    return 'Both arrays are identical';
  }
  return 'The two arrays are different.';
};

// Test Cases (True)
console.log('True:', assertArraysEqual([1, 2, 3], [1, 2, 3], true));
console.log('True:', assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true));
console.log('True:', assertArraysEqual([1, 1, 3], [1, 1, 3,], true));
console.log('True:', assertArraysEqual([], [], true));


console.log('False:', assertArraysEqual([1, 2, 3], [3, 2, 1], true));
console.log('False:', assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false));
console.log('False:', assertArraysEqual([1, 2, 3], [3, 2, 1, 2], false));