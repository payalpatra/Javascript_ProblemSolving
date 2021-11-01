// Reducing Dishes

var maxSatisfaction = function (s) {
    s.sort((a, b) => a - b);

    // Track the maximum 
    let result = 0;
    let len = s.length;

    for (let i = 0; i < len; i++) {
        // Track the Like Time cofficient
        let current = 0;
     

        for (let j = i; j < len; j++) {
            
            current = current + s[j] * (j - i + 1);
        }
        result = Math.max(result, current);

    }

    return result;
};

console.log(maxSatisfaction([-1, 3, 4]));

// output - 17
