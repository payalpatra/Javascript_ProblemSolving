// Charles And Necklace

// There is a minimum of 1 pearl and maximum of x pearls, such that each pearl has its own magnitude coefficient
// The pearls should be in non decreasing orders of their magnificent.

// You are given the maximum number of pearls in a necklace and the range of the magnificent coefficient of the pearls. Find the number of necklace that can be made .

function charlesAndNecklace(N, L, R) {
    let ans = 0;

    // [[0, 0], [0, 0]]  , R - L + 1 = 2
    let dp = new Array(N).fill(0).map(() => new Array(R - L + 1).fill(0));

    // Traverse the range [0, N]
    for (let i = 0; i < N; i++) {
        dp[i][0] = 1;
    }

    // Traverse the range [1, R - L]
    for (let i = 1; i < dp[0].length; i++) {

        // Update dp[i][j]
        dp[0][i] = dp[0][i - 1] + 1;
    }

    // Assign dp[0][R-L] to ans
    ans = dp[0][R - L];

    // Traverse the range [1, N]
    for (let i = 1; i < N; i++) {

        // Traverse the range [1, R - L]
        for (let j = 1; j < dp[0].length; j++) {

            // Update dp[i][j]
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }

        // Increment ans by dp[i-1][j]
        ans += dp[i][R - L];
    }

    // Return ans
    return ans;
}

console.log(charlesAndNecklace(2, 8, 9))

// input1 : 2 -> Maximum number of pearls that can be used to form the necklace
// input2 : 8 -> Starting magnificent coefficient of pearls
// input3 : 9 -> Ending magnificent coefficient of pearls

// output : 5 

// EXAPLANATION 

// The necklaces of length one that can be formed are { "8", "9" }.
// The necklaces of length two, that can be formed are {"89,88,99,"}