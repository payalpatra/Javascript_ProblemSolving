// To find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function CommonPrefix(strs) {
    let maxPrefLen = Math.min(...strs.map(str => str.length))
    let prefix = "";

    for (let i = 0; i < maxPrefLen; i++) {
        let char = strs[0][i];
        // To check if the char is present in every string
        if (strs.every(str => str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }

    return prefix;
}

console.log(CommonPrefix(["flower", "flow", "flight"]))