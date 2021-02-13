// If it is multiple of 3 print Fizz,if it is multiple of 5 print Buzz and print FizzBuzz if its multiple of Both 3 and 5
// To Find the max and min value in an array

// SOURCE CODE
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
console.log(fizzBuzz());
