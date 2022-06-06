const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)){
    console.log(`Passed -> ${inspect(actual)}   ===   ${inspect(expected)}`);
  } else {
    console.log(`Failed -> ${inspect(actual)}   !==   ${inspect(expected)}`);
  }  
};

module.exports = assertObjectsEqual;

// const ab = { a: '1', b: "2" };
// const ba = { b: "2", a: "1" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false

// assertObjectsEqual(ab, ba); // => true