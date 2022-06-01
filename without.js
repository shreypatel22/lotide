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

const without = (source, itemsToRemove) => {
  let filteredArray = [];
  for (let elements of source) {
    filteredArray.push(elements);
  }  
  let indexsToRemove = [];
  for (let i = 0; i < source.length; i++){
    for (let j = 0; j < itemsToRemove.length; j++){
      if(source[i] === itemsToRemove[j]) {
        indexsToRemove.push(i);
      }
    }
  }  
  for (let i = indexsToRemove.length - 1; i >= 0; i--){
    filteredArray.splice(indexsToRemove[i], 1);
  }  
  return filteredArray;
};

// Test Cases
assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
assertArraysEqual(without(['hello', 'world', 'lighthouse'], ['lighthouse']), ['hello', 'world']);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);
assertArraysEqual(without(["1", "2", "3"], ['1', '2', "3"]), []);
assertArraysEqual(without(["1", "2", "3", 4, 5, 6], []), ["1", "2", "3", 4, 5, 6]);
assertArraysEqual(without(['hello', 'world', 'lighthouse'], ['hello']), ['world', 'lighthouse']);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



