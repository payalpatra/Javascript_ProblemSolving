// Make the array contain as many distinct elements as possible after performing some number of operations.

// In a single operation , One can choose any 3 elements from the array and remove the maximum and minimum among the three from the array.
// Determin the maximum number of elements to remaining in the array when all of the elements are distinct.

function NumberGame(a, k) {
    let n = a.length
    var i;
    var s = [];
    // making multiset from given array
    for (i = 0; i < n; i++) {
        if (!s.includes(a[i]) || k == 0)
            s.push(a[i]);
        else {
            k--;
        }
    }

    if (k != 0)
        return s.size - k;
    else {
        var st = new Set();
        s.forEach(element => {
            st.add(element);
        });

        return st.size;

    }
}
console.log(NumberGame([5, 7, 5, 5, 1, 2, 2], 3))