// To Reverse an Integer

// Input Data -> -123
// Output - -321
// Explanation ---> The reverse Of -123 is -321

// SOURCE CODE
function reverseInt(num) {
  // ----------- METHOD -1 -------------- //

  let lastDigit,
    reverseNum = 0;
  while (num) {
    lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = (num / 10) | 0;
  }
  return reverseNum;

  // ----------- METHOD -2 -------------- //

  // let revInt= int.toString().split("").reverse().join("");
  // return parseInt(revInt) * Math.sign(int);
}

console.log(reverseInt("-123"));
