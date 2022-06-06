// find middle elements of a given array
const middle = function(array) {
  let length = array.length;
  let middleArray = []; 
  if(length <= 2){
    return [];
  } else if(length % 2 !== 0) {
    middleArray.push(array[Math.floor(length/2)]);      
  } else {
    let middleIndex2 = length/2;
    let middleIndex1 = middleIndex2 - 1;
    middleArray.push(array[middleIndex1], array[middleIndex2]);
  }
  return middleArray;
};

module.exports = middle;



