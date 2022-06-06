// Using for in loop
const findKeyByValue = (lookIn, lookFor) => {
  for (let key in lookIn) {
    if(lookIn[key] === lookFor) {
      return key;
    }    
  }
  return undefined;
}

module.exports = findKeyByValue;


// Tests
  // const bestTVShowsByGenre = { 
  //   sci_fi: "The Expanse",
  //   comedy: "Brooklyn Nine-Nine",
  //   drama:  "The Wire"
  // };

  // // Test Cases
  // assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  // assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sci_fi');
  // assertEqual(findKeyByValue(bestTVShowsByGenre, 'Random'), undefined);