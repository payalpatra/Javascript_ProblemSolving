// To Find the binary equivalent of the decimal number

function DecToBin(num) {
    let bin = 0;
    let rem;
    let i = 1;

    while (num !== 0) {

        rem = num % 2;
        num = parseInt(num / 2);
        // Binary Equivalent
        bin = bin + rem * i;
        // Digit place 
        i = i * 10
    }
    return bin;
}

console.log(DecToBin(9))