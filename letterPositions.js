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


const letterPositions = function(sentence){
  const results = {};
  for (let index in sentence) {
    if(results[sentence[index]]) {
      results[sentence[index]].push(Number(index));
    } else {
      results[sentence[index]] = [Number(index)];
    }    
  }
  // console.log(results);
  return results;
};



// Test Cases
let test1 = 'hello';
assertArraysEqual(letterPositions(test1)['h'], [0]);
assertArraysEqual(letterPositions(test1)['e'], [1]);
assertArraysEqual(letterPositions(test1)['l'], [2, 3]);
assertArraysEqual(letterPositions(test1)['o'], [4]);