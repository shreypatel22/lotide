// findKey Function
const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key; 
    }      
  }
  return undefined;
}

module.exports = findKey;


// Tests
  // const object1 = {
  //   "Blue Hill": { stars: 1 },
  //   "Akaleri":   { stars: 3 },
  //   "noma":      { stars: 2 },
  //   "elBulli":   { stars: 3 },
  //   "Ora":       { stars: 2 },
  //   "Akelarre":  { stars: 3 }
  // }

  // // findKey where stars = 2
  // assertEqual(findKey(object1, x => x.stars === 2), 'noma')

  // // findKey where stars = 1
  // assertEqual(findKey(object1, x => x.stars === 1), 'Blue Hill')