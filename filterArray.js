// To remove spcific values from the input Array

// Input Data - ([2,3,4,5,6, "hello"],2,6)
// Output - [3,4,5, "hello"]
// Explanation - 2 and 6 is removed and we get the leftover values in array form

// SOURCE CODE
function filterArray(arr) {
  // ----------- METHOD -1 -------------- //

  // To get all the arguments in an array
  const args = Array.from(arguments);

  function filterArr(arr){
    // returns true if not in array
    return args.indexOf(arr) === -1 ;

  }

  return arr.filter(filterArr)

}
console.log(filterArray( [2,3,4,5,6, "hello"],2, 6));

// Notes
// indexOf returns -1 if not found
// Here arr --> [2, 3, 4, 5, 6, "hello"]
// Since args containes [2,3,4,5,6, "hello"],2, 6 -> args.indexOf(arr) === -1 will return -1 for 2,3,4,5,6, "hello" 

function filterArray2(arr , ...rest){
  // ----------- METHOD -2 -------------- //
  
  // return arr.filter(val => !rest.includes(val));
  return arr.filter(function (ele){
    return !rest.includes(ele)
  })
}

console.log(filterArray2( [2,3,4,5,6, "hello"],2, 6));
