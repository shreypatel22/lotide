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
  if(eqArrays(array1, array2)){
    console.log(`Passed -> [${array1}] === [${array2}]`);
  } else {
    console.log(`Failed -> [${array1}] !== [${array2}]`);
  }
};


// TakeUntil function
const takeUntil = (array, callback) => {
  const result = [];

  for (let element of array) {
    if (callback(element)) {
      return result;
    }
    result.push(element);    
  }
  return result;   
}


// TestCases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])

const data2 = ["Ive", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["Ive", "been", "to", "Hollywood"])
