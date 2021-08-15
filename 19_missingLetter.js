// To find the missing letter in the letter sequence

// Input Data - "abce"
// Output - d
// Explanation - d is the missing letter in the given letter sequence

// SOURCE CODE
function missingLetter(str){
    // Character code of initial letter of the input string
    let compare = str.charCodeAt(0);
    let missing;
    //Converts the str into an array
    str.split("").map((char , i)=>{
        if(str.charCodeAt(i) === compare){
            ++compare;
        }else{
            // Converts character code to letter
            missing =String.fromCharCode(compare);
        }
    });
    return missing;
}

console.log(missingLetter("abce"));