// To count frequency of each alphanumeric character in a string 

// Input Data - "Your PIN number is 12345...!"
// Output - {'1': 1,'2': 1,'3': 1,'4': 1,'5': 1,y: 1,o: 1,u: 2,r: 2,p: 1,i: 2,n: 2,m: 1,b: 1,e: 1,s: 1}
// Explanation - These are the number of occurance of each alphanumeric character present in the string.

// SOURCE CODE
function charCount(str) {

    let output = {};
    let keys = [];

    str
        .toLowerCase()
        .split("")
        .forEach(function (str_) {
            if (str_ !== " ") {
                keys.push(str_);
            }
        });

    keys.forEach(function (key) {
        if (output[key]) {
            output[key]++;
        } else {
            output[key] = 1;
        }
    });

    return output;

}
console.log(charCount("Your PIN number is 12345"));

/// ----  Method 2 ---- \\\

function charCount2(str) {
    let output = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        
        // if (/[a-z0-9]/.test(char)) {
        //   if (output[char]) {
        //     output[char]++;
        //   } else {
        //     output[char] = 1;
        //   }

        // output[char] ? output[char]++ :output[char] =1;
        // }

        if (
            (char.charCodeAt() > 47 && char.charCodeAt() < 58) ||
            (char.charCodeAt() > 96 && char.charCodeAt() < 123)
        ) {
            output[char] ? output[char]++ : (output[char] = 1);
        }
    }

    return output;
}
console.log(
    "I am the second method's output",
    charCount2("Your PIN number is 12345...!")
);

// ---- Notes ---- \\

// char.charCodeAt() > 47 && char.charCodeAt() < 58 ---> // Numeric (0 - 9)
// char.charCodeAt() > 64 && char.charCodeAt() < 91 ---> // Capital Alphabets (A - Z)
// char.charCodeAt() > 96 && char.charCodeAt() < 123 ---> // Small Alphabets (a - z)