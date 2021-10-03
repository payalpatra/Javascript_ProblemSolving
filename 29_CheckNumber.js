// Given an array of integers , for each element determine whether that element occurs earlier in the array and whether it occurs later in the.

// 1) Create two strings of binary digits. In the first string :
//      -- Each character is a 1, if the value at that index also occurs earlier in the array, or 0 if not.
// 2) In the second string , each character is a 1 , if the value at the index occurs later in the array , or 0 if not.

// Reurn an array of two strings , 

function CheckNumber(arr) {
    let str1 = "";
    let str2 = "";
    let hash = new Map();
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];

        if (!hash[ele]) {
            hash[ele] = 1;
            str1 = str1 + "0";
        } else {
            str1 = str1 + "1";
            hash[ele] = hash[ele] + 1;
        }

    }
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];

        if(hash[ele] > 1) {
            str2 = str2 + "1";
            hash[ele] = hash[ele] - 1;
        }else{
            str2 = str2 + "0";
        }

    }



    return [str1, str2]

}

console.log(CheckNumber([1, 3, 2, 3, 4, 1]))

