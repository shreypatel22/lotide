const letterPositions = function(sentence){
  const results = {};
  for (let index in sentence) {
    if (sentence[index] !== ' '){
      if(results[sentence[index]]) {
        results[sentence[index]].push(Number(index));
      } else {
        results[sentence[index]] = [Number(index)];
      }    
    }
  }
  console.log(results);
  return results;
};

module.exports = letterPositions;

// Test Cases
  // let test1 = 'hello';
  // assertArraysEqual(letterPositions(test1)['h'], [0]);
  // assertArraysEqual(letterPositions(test1)['e'], [1]);
  // assertArraysEqual(letterPositions(test1)['l'], [2, 3]);
  // assertArraysEqual(letterPositions(test1)['o'], [4]);
  // letterPositions(test1);