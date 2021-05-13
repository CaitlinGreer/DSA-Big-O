// What does the following algorithm do? What is the Big O of the following algorithm? 
// Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isWhat(29))

// It checks to see if the number input is a prime number.  
// Linear O(n) as the number gets larger the running time grows