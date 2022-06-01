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

// Out to console whether the two arrays are the same or not
const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)){
    console.log(`Passed -> [${array1}] === [${array2}]`);
  } else {
    console.log(`Failed -> [${array1}] !== [${array2}]`);
  }
};

// find middle elements of a given array
const middle = function(array) {
  let length = array.length;
  let middleArray = []; 
  if(length <= 2){
    return [];
  } else if(length % 2 !== 0) {
    middleArray.push(array[Math.floor(length/2)]);      
  } else {
    let middleIndex2 = length/2;
    let middleIndex1 = middleIndex2 - 1;
    middleArray.push(array[middleIndex1], array[middleIndex2]);
  }
  return middleArray;
};

// Test Cases
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);