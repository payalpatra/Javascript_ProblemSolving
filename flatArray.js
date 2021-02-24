// To convert an array of multiple arrays to a single array

// Input Data - [[1,2,3],[4,5,6],[7]]"
// Output - [1,2,3,4,5,6,7]
// Explanation - The input array is break down into one array.

// SOURCE CODE
function flatArray(arrays) {
  // ----------- METHOD -1 -------------- //

  //   return [].concat(...arrays);

  // ----------- METHOD -2 -------------- //

  //   return arrays.flat();

  // ----------- METHOD -3 -------------- //

  //   return [].concat.apply([], arrays);

  // ----------- METHOD -4 -------------- //

  //   return arrays.reduce(function (a, b) {
  //     return a.concat(b);
  //   });

  // ----------- METHOD -5 -------------- //

  let flattenArray = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      flattenArray.push(arrays[i][j]);
    }
  }
  return flattenArray;
}
console.log(flatArray([[1, 2, 3], [4, 5, 6], [7]]));
