// To find how far (or close) the array is from being sorted.

// If the array is already sorted, the the inversion count is 0, but if the array is sorted in the reverse order, the inversion count is maximum.

// -- Two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j

// Input Data - [8, 4, 2, 1]
// Output - 6
// Explanation --- Given array has six inversions:
// (8, 4), (4, 2), (8, 2), (8, 1), (4, 1), (2, 1)

// BRUTE FORCE APPROACH
function InversionCount(array) {
    // ----------- METHOD -1 -------------- //

    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] > array[j]) {
                count++;
            }
        }
    }

    return count;
}

console.log("BRUTE FORCE",InversionCount([8, 4, 2, 1]));


function mergeAndCount(arr, l, m, r) {

    // Left subarray
    let left = [];
    for (let i = l; i < m + 1; i++) {
        left.push(arr[i]);

    }

    // Right subarray
    let right = [];
    for (let i = m + 1; i < r + 1; i++) {
        right.push(arr[i]);
    }
    let i = 0, j = 0, k = l, swaps = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        }
        else {
            arr[k++] = right[j++];
            swaps += (m + 1) - (l + i);
        }
    }
    while (i < left.length) {
        arr[k++] = left[i++];
    }
    while (j < right.length) {
        arr[k++] = right[j++];
    }
    return swaps;
}

// Merge sort function
function mergeSortAndCount(arr, l, r) {

    // Keeps track of the inversion count at a
    // particular node of the recursion tree
    let count = 0;
    if (l < r) {
        let m = Math.floor((l + r) / 2);

        // Total inversion count = left subarray count
        // + right subarray count + merge count

        // Left subarray count
        count += mergeSortAndCount(arr, l, m);

        // Right subarray count
        count += mergeSortAndCount(arr, m + 1, r);

        // Merge count
        count += mergeAndCount(arr, l, m, r);
    }
    return count;
}

console.log("OPTIMIZED",mergeSortAndCount([8, 4, 2, 1], 0 , 3) );
