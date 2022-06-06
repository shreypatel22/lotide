
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

module.exports = takeUntil;

// TestCases
  // const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  // const results1 = takeUntil(data1, x => x < 0);
  // assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])

  // const data2 = ["Ive", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  // const results2 = takeUntil(data2, x => x === ',');
  // assertArraysEqual(results2, ["Ive", "been", "to", "Hollywood"])
