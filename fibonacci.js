// To find the sum of nth number in Fibonacci series

// Input Data - 10
// Output - 55
// Explanation - The sum of numbers from 0 to 10 is 55

// SOURCE CODE
function fib(n) {
    // ----------- METHOD -1 -------------- //

    // if (n === 0 || n === 1) {
    //     return n
    // } else {
    //     return fib(n - 1) + fib(n - 2)
    // }

    // ----------- METHOD -2 -------------- //
    if (n < 0) {
        throw new Error(
            "Index was negative. No such thing as a negative index in a series."
        );
    } else if (n === 0 || n === 1) {
        return n;
    }

    let pre_prev = 0; // 0th fibonacci
    let prev = 1; // 1st fibonacci
    let current;

    for (let i = 1; i < n; i++) {
        current = prev + pre_prev;
        pre_prev = prev;
        prev = current;
    }
    return current;
}
console.log(fib(10));
