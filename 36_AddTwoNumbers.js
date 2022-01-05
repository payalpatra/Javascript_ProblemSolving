// Add two numbers without using arithmetic operators

function Add(a, b) {
    
    // Iterate till there is no carry
    while(b !== 0) {
        
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;

    }

    return a;

}

console.log(Add(15, 32))

// Time Complexity: O(log y)
// Auxiliary Space: O(1)

function add2(a, b) {

    if(b === 0){
        return a;
    }

    return add2(a ^ b, (a & b) << 1)

}

console.log(add2(15, 32))