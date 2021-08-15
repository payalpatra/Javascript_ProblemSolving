// To return the indices of two numbers in an array such that they add up to a specific target

// Input Data - [2,7,11,15],9
// Output - [ 0, 1 ]
// Explanation - since 2+7 = 9 and the indexes of 2 and 7 are 0 and 1. 

// SOURCE CODE
function twoSum(nums, target) {
    let storage = {};
    for (let [index, num] of nums.entries()) {
        if (storage[num] !== undefined) {
            return [storage[num], index]
        }
        else { 
            storage[target - num] = index 
        };
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
