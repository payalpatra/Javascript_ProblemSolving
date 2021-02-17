// To find out the words having the longest length in the sentence

// Input Data - "Hye My Name is Payal" ;
// Output - [ 'there', 'payal' ]
// Explanation - These two words have the highest length from all the words of the input sentence

// SOURCE CODE
function longestWord(sentence) {
  // Create flitered array
  // ---- [ 'hye', 'my', 'name', 'is', 'payal' ] ---- //
  const wordArr = sentence.toLowerCase().match(/[a-z0-9]+/g);
  // Sort by length
  const sorted = wordArr.sort(function (a, b) {
    return b.length - a.length;
  });
  // if multiple words have the same length
  const longestWordArr = sorted.filter(function (word) {
    // returns an array of all the words having the highest length //
    // --- sorted[0].length will always have the highest length --- //
    return word.length === sorted[0].length;
  });
  // Check if multiple words have the same length
  if (longestWordArr.length === 1) {
    // Returns String
    return longestWordArr[0];
  } else {
    // Returns Array
    return longestWordArr;
  }
}
console.log(longestWord("Hye there, My Name is Payal"));
