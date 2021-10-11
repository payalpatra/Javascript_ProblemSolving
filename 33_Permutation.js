function Permutation(S) {
    function swap(a, i, j) {
        let temp;
        let charArray = a.split("");
        temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
        return (charArray).join("");
    }

    function permute(str, l, r) {
        if (l == r)
            console.log(str);
        else {
            for (let i = l; i <= r; i++) {
                str = swap(str, l, i);
                permute(str, l + 1, r);
                str = swap(str, l, i);
            }
        }
        return 
    }
    return permute(S, 0, S.length - 1)
}


console.log(Permutation("ABC"))