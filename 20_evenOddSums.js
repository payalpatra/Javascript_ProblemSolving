// To find the sum of odd and even numbers in an arary

// Input Data - [150,60,60,45,71]
// Output - [270,116]
// Explanation - The sum of even numbers (i.e 150+60+60) is 270 and odd numbers (i.e 45+71) is 116.

// SOURCE CODE
function evenOddSums (arr){
    // ----------- METHOD -1 -------------- //

    // let oddSum=0;
    // let evenSum=0;
    // arr.forEach(function(ele){
      
    //     if (ele % 2 === 0){
    //         evenSum += ele;
    //     }else{
    //         oddSum += ele         
    //     }
    // })
    // return [evenSum, oddSum];

    // ----------- METHOD -2 -------------- //

    let oddSum = 0;
    let evenSum = 0;
    arr.filter((ele)=>{
        ele % 2 === 0 ? evenSum += ele : oddSum += ele;
    })
    return [evenSum, oddSum];

}


console.log(evenOddSums([150,60,60,45,71]))