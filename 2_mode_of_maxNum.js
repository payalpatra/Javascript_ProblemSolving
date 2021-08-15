// Total Number of times the Maximum Number Occured in an Array

// Input Data - [3, 2, 1, 3]
// Output - 2
// Explanation ---> Here 3 is the maximum and its number of occurance in the array is 2 .

// SOURCE CODE
function mode_of_maximum(arr) {
  let largestNumber = arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
  // Filters out all the largest number [3,3]
  let array_of_largestNumber = arr.filter(function (num) {
    return num === largestNumber;
  });
  return array_of_largestNumber.length;
}
console.log(mode_of_maximum([3, 2, 1, 3]));
