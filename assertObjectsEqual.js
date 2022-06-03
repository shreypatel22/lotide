const eqArrays = require('./eqArrays');


const eqObjects = (object1, object2) => {
  
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let objOneKey of keys1) {
    // First check to see if any of the values are arrays => if so run the eqArrays function to compare both arrays
    if (Array.isArray(object1[objOneKey]) && Array.isArray(object2[objOneKey])) {
      if (!eqArrays(object1[objOneKey], object2[objOneKey])) {
        return false;
      }; //If none of the values are arrays do this simple primative test like assertEqual
    } else if (object1[objOneKey] !== object2[objOneKey]) {
        return false;    
    }
  }
  return true;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)){
    console.log(`Passed -> ${inspect(actual)}   ===   ${inspect(expected)}`);
  } else {
    console.log(`Failed -> ${inspect(actual)}   !==   ${inspect(expected)}`);
  }  
};

const ab = { a: '1', b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

assertObjectsEqual(ab, ba); // => true