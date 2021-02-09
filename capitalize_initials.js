// Just the First Letters need to be capitalize

// Input Data - "I love javascript"
// Output - I Love Javascript
// Explanation ---> All the initials of each word will be capitalized

function capitalizeLetters(str) {
  // ----------- METHOD -1 -------------- //

  //   let strArr = str.toLowerCase().split(" ");
  //   for (let i = 0; i < strArr.length; i++) {
  //     strArr[i] =
  //       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  //   }
  //   return strArr.join(" ");

  // ----------- METHOD -2 -------------- //
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

console.log(capitalizeLetters("I love javascript"));
