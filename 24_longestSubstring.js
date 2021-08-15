// To find the longest substring from the input string

// Input Data - "abrexrzx"
// Output - 5
// Explanation --- abrex is the longest string that can be derived from "abrexrzx" without duplicate character

function longestSubstring(string) {
    let map = {}
    let start = 0
    let end = 0
    let maxLen = 0
    let arr = string.split('')

    for (end = 0; end < string.length; end++) {
        let char = arr[end]
        let current = map[char]
        if (current != undefined && start <= current) {
            start = current + 1
        } else {
            maxLen = Math.max(maxLen, (end - start) + 1)
        }

        map[char] = end
    }
    return maxLen

}
console.log(longestSubstring("abrexrzx"));

