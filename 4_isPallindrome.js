// To Check if the input string is a Pallindrome

// Input Data - "It is a Pallindrome"
// Output - true
// Explanation ---> racecar can be read as racecar both in forward and backward manner

// SOURCE CODE
function isPallindrome(str) {
  // ----------- METHOD -1 -------------- //

  // To find the Length of the string
  len = str.length;
  for (let char = 0; char < len / 2; char++) {
    // To Check if the first character matches the last character
    if (str[char] === str[len - 1 - char]) {
      return "It is a Pallindrome";
    } else {
      return "It is not a Pallindrome";
    }
  }

  // ----------- METHOD -2 -------------- //

  // let revString = "";
  // revString = str.split("").reverse().join("");

  // return revString === str;
}

console.log(isPallindrome("racecar"));
