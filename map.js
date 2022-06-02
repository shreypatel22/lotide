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

// Compares arrays and console logs whether they are the same or not
const assertArraysEqual = function(array1, array2) {
  if(eqArrays(array1, array2)){
    console.log(`Passed -> [${array1}] === [${array2}]`);
  } else {
    console.log(`Failed -> [${array1}] !== [${array2}]`);
  }
};


// Map Function
const map = function(array, callback) {
  const results = [];
  array.forEach(word => {
    results.push(callback(word))
  });
  return results;
}

// Test Cases

// the function which is represented by "word => word[0]" takes in one parameter (word) then returns the first index of the parameter
// ---in this case it takes in a string and returns the first letter of that string 
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// This callback function gets the length of the words
const words3 = ["ground", "control"];
const results3 = map(words3, word => word.length);
assertArraysEqual(results3, [6, 7])


// This callback function should return the last letter of the word
const words2 = ["ground", "control", "to", "major", "tom"];
const results2 = map(words2, word => word.slice(-1));
assertArraysEqual(results2, ['d', 'l', 'o', 'r', 'm']);


