// Compare Arrays
const eqArrays = require('./eqArrays')

const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)){
    console.log(`Passed -> [${array1}] === [${array2}]`);
  } else {
    console.log(`Failed -> [${array1}] !== [${array2}]`);
  }
};


module.exports = assertArraysEqual;