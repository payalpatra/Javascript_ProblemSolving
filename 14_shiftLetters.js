// To shift each letter of the input string to its next letter and uppercasing all the vowels

// Input Data - "hello there"
// Output - "Ifmmp UIfsf"
// Explanation - since, I comes after h ,f comes after e and so on . The output of "hello there" turns out to be "Ifmmp UIfsf"

// SOURCE CODE
function shiftToNextAlphabet(string) {
  // Replacing the all the letter of the string to its next Letter
  let newString = string
    .toLowerCase()
    .replace(/[a-z]/gi, function (currentChar) {
      if (currentChar === "Z" || currentChar === "Z") {
        return "a";
      } else {
        return String.fromCharCode(currentChar.charCodeAt() + 1);
      }
    });
  // Replacing the vowels of the string to Upper Case
  newString = newString.replace(/a|e|i|o|u/gi, function (vowel) {
    return vowel.toUpperCase();
  });
  return newString;
}
console.log(shiftToNextAlphabet("Hello There"));
