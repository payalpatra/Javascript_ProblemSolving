// To Check if the input two strings are Anagrams

// Input Data - "elbow" , "below"
// Output - true
// Explanation - elbow and below are anagram because they have same characters

// SOURCE CODE
function isAnagram(str1, str2) {
  // ----------- METHOD -1 -------------- //

  if (strFormat(str1) === strFormat(str2)) {
    return "Yes they are anagrams";
  } else {
    return "No they are not anagrams";
  }
  //   return strFormat(str1) === strFormat(str2);
}

// Formatting the strings
function strFormat(str) {
  return (
    str
      // Replacing anything that is not a word character with an empty string
      .replace(/[^\w]/g, "")
      // Converting the string to lowercase
      .toLowerCase()
      // Converting string into an array of each letter
      .split("")
      // Sorted Array
      .sort()
      // Converting the array into a string
      .join("")
  );
}
console.log(isAnagram("elbow", "below"));

// ----------- METHOD -2 -------------- //
function isAnagram2(str1, str2) {
  // Converting both the strings into sorted array
  const arr1 = str1.toLowerCase().split("").sort();
  const arr2 = str2.toLowerCase().split("").sort();
  return arr1.every(
    (value, index) =>
      // Comparing value of array 1 with the value of array 2
      value === arr2[index]
  );
}

console.log(isAnagram2("State", "Taste"));
