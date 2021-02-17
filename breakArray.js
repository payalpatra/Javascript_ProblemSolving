// To break an Array into multiple arrays at specified breaking points

// Input Data - [ 1,2,3,4,5,6,7 ],3 ;
// Output - [[1,2,3],[4,5,6],[7]]
// Explanation - The input array is break down into three arrays of input length (i.e 3)

// SOURCE CODE
function breakArray(array, len) {
  // ----------- METHOD -1 -------------- //

  // const output_array = [];
  // let i = 0;
  // while (i < array.length) {
  //   output_array.push(array.slice(i, i + len));
  //   i = i + len;
  // }
  // return output_array;

  // ----------- METHOD -2 -------------- //

  const output_array = [];
  array.forEach(function (ele) {
    // last array of output_array
    const last_array = output_array[output_array.length - 1];
    if (!last_array || last_array.length === len) {
      // Push the element array
      output_array.push([ele]);
    } else {
      // push the element
      last_array.push(ele);
    }
  });
  return output_array;
}
console.log(breakArray([1, 2, 3, 4, 5, 6, 7], 3));
