// The character that has highest occurance in a string

// Input Data - "javascriptttt"
// Output - t
// Explanation ---> Here t occurs the highest no of times

// SOURCE CODE
function maxChar(str) {
  // Empty Object
  let charMap = {};
  let maxNum = 0;
  maxChar = "";

  str.split("").forEach(function (char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  for (let char in charMap) {
    // debugger;
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
console.log(maxChar("javascriptttt"));
