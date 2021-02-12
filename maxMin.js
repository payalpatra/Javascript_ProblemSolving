// To Find the max and min value in an array

// Input Data - [15, 55, 23, 45, 12];
// Output - { maximum: 55, minimum: 12 }
// Explanation - 55 is the maximum value and 12 is the minimum value from the array

// SOURCE CODE
function maxMin(arr) {
  // ----------- METHOD -1 -------------- //

  const max = arr.reduce((a, b) => {
    return Math.max(a, b);
  });
  const min = arr.reduce((a, b) => {
    return Math.min(a, b);
  });
  return { maximum: max, minimum: min };

  // ----------- METHOD -1 -------------- //

  //   return { Maximum: Math.max(...arr), minimum: Math.min(...arr) };
}

console.log(maxMin([15, 55, 23, 45, 12]));
