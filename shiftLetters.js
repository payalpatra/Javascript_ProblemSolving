// To shift each letter of the input string to its next letter

// Input Data - "hello there"
// Output - "Ifmmp UIfsf"
// Explanation - since, I comes after h ,f comes after e and so on . The output of "hello there" turns out to be "Ifmmp UIfsf"

// SOURCE CODE
function shiftToNextAlphabet(string) {
  let newString = string.replace(/[a-z]/gi, function (currentChar) {
    if (currentChar === "Z" || currentChar === "Z") {
      return "a";
    } else {
      //   return String.fromCharCode(currentChar.charCodeAt() + 1);
      return String.fromCharCode(currentChar.charCodeAt() + 1);
    }
  });
  return newString;
}
console.log(shiftToNextAlphabet("Hello There"));
