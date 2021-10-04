// 1. Write a program to find HCF of two numbers by without using recursion.

// Sample Input:
// 70 15

// Sample Output:
// 5

// Intitution Keep subtracting the smaller number from the greater number until both the number is equal.

// WITHOUT RECURSION
function HCF(num1, num2) {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
  }
  return num1;
}

console.log(HCF(70, 15));

// step 1 -

// num1 = 70 - 15 = 55 , num2 = 15
// num1 = 55 - 15 = 40, num2 = 15
// num1 = 40 - 15 = 25 , num2 = 15
// num1 = 25 - 15 = 10 , num2 = 15
// num1 = 10 , num2 = 15 - 10 = 5
// num1 = 10 - 5 , num2 = 5
// SINCE , num1 === num2 --> return num1 or num2

// WITH RECURSION

function gcd(a, b) {
  // Everything divides 0
  if (a == 0 && b == 0) return 0;
  if (a == 0) return b;
  if (b == 0) return a;

  // Base case
  if (a == b) return a;

  // a is greater
  if (a > b) return gcd(a - b, b);

  return gcd(a, b - a);
}
