//returns the number in the middle of an array, if the array has even values it returns the 2 that are in the middle, if it is empty or contains only 2 elements, it returns empty

const middle = function(arr) {
  let result = [];
  if (arr.length <= 2) {
    return result;
  } else if (arr.length % 2 === 0) {
    result.push(arr[(arr.length / 2) - 1]);
    result.push(arr[arr.length / 2]);
    return result;
  } else {
    result.push(arr[Math.floor(arr.length / 2)]);
    return result;
  }
};


module.exports = middle;
