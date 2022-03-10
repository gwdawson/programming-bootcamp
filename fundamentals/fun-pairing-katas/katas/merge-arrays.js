/*
  The function mergeArrays should take 2 arrays and merges them into one array, taking one item from each array at a time.
  If the arrays are of uneven length, then simply continue adding elements from the longest array onto the end of the merged array.
  E.g. [1, 2, 3] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c']
  [1, 2, 3, 4, 5] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c', 4, 5]
*/

function mergeArrays(arr, arr2) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr.push(arr2[i]);
  }
  return newArr;
}

module.exports = mergeArrays;
