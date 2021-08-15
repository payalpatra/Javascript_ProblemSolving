// To add all the input numbers with no restrictions on passed number of inputs

// Input Data - 2,5,6,7
// Output - 20
// Explanation - The sum of all the input numbers is 20

// SOURCE CODE
function sumAll() {
  // ----------- METHOD -1 -------------- //

  // let args = Array.prototype.slice.call(arguments);
  // To convert the object argument into array of arguments
  let args = Array.from(arguments);
  let total = 0;
  args.forEach((ele) => (total = total + ele));
  return total;
}
console.log(sumAll(2, 5, 6, 7));

function addAll(...numbers) {
  // ----------- METHOD -2 -------------- //

  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
  //   return numbers.reduce((acc, curr) => acc + curr);
}
console.log(addAll(2, 5, 6, 7));
