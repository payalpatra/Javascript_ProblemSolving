// To sort all the non-negative numbers of an array in ascending order 

// Input Data - [-1,150,190,170,-1,-1,160,180]
// Output - [-1,150,160,170,-1,-1,180,190]
// Explanation - All non-negative numbers is sorted but the position of -1 remains the same

// SOURCE CODE
function sortByType(array){
    arr1 =[];
    arr2 =[];

    array.forEach((ele , index) => {
        if(ele === -1){
            // Index of all the negative numbers 
            arr1.push(index)
        }else{
            // Values of all the non-negative numbers
            arr2.push(ele)
        }
    });
    // Sorted array of non-negative numbers
   const sortedArray = arr2.sort((prev , next) => prev-next);
   arr1.forEach((ele,index) => {
       sortedArray.splice(arr1[index], 0 , -1)
   });
   return sortedArray;
}

const array = [-1,150,190,170,-1,-1,160,180]

console.log(sortByType(array))