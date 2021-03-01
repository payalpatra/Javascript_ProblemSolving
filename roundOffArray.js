// To round off each number of an array according to given conditionS

// Input Data - [73, 67, 38, 33]
// Output - [ 75, 67, 40, 33 ]

// Conditions : -
//  1) If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
//  2) If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

// Explanation : -
// 1) 73 round to 75(75-73 is less than 3)
// 2) 67 do not round(70-65 is 3 or higher)
// 3) 38 round to(40-38 is less than 3)
// 2) 33 do not round (result is less than 40)

// SOURCE CODE
function roundOffArray(numbersArray) {
  let output = [];
  numbersArray.forEach((number) => {
    if (number < 38) {
      output.push(number);
    } else if (number >= 38) {
      if (round(number) - number < 3) {
        output.push(round(number));
      } else {
        output.push(number);
      }
    } else {
      output.push(number);
    }
  });
  return output;
}

// Round a number to its nearest multiple of 5
function round(x) {
  return Math.ceil(x / 5) * 5;
}

console.log(roundOffArray([73, 67, 38, 33]));
