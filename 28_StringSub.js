// Given two strings, determine the number of times the first one appears as a subsequence in the second one. 

function StringSub(str1, str2) {
    let m = str2.length;
    let n = str1.length;
 
    // Create a table to store
    // results of sub-problems
    let lookup = Array(m + 1);
    for(let i = 0; i < m + 1; i++)
        lookup[i] = Array(n + 1).fill(0);
 
    // If first string is empty
    for(i = 0; i <= n; ++i)
        lookup[0][i] = 0;
 
    // If second string is empty
    for(i = 0; i <= m; ++i)
        lookup[i][0] = 1;
 
    // Fill lookup in
    // bottom up manner
    for(i = 1; i <= m; i++)
    {
        for(j = 1; j <= n; j++)
        {
             
            // If last characters are
            // same, we have two options -
            // 1. consider last characters
            // of both strings in solution
            // 2. ignore last character
            // of first string
            if (str2.charAt(i - 1) == str1.charAt(j - 1))
                lookup[i][j] = lookup[i - 1][j - 1] +
                               lookup[i - 1][j];
            else
             
                // If last character are
                // different, ignore last
                // character of first string
                lookup[i][j] = lookup[i - 1][j];
        }
    }
    return lookup[m][n];

}


console.log(StringSub("HRW", "HERHRWS"))