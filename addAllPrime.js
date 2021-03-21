// To add all the prime numbers in a given range

// Input Data - 10
// Output - 17
// Explanation - The sum of all the prime numbers between 2 - 10 (2+3+5+7) is 17

// SOURCE CODE
function addAllPrime(range) {
  let total = 0;
  // To check if the number is a prime number
  function isPrime(num) {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let num = 2; num <= range; num++) {
    if (isPrime(num)) {
      total += num;
    }
  }
  return total;
}

console.log(addAllPrime(10));
