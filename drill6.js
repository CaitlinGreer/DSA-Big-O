// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    let ticks = 0
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            ticks++
            console.log(arr[i] + ", " +  arr[j] + ", "  + 'ticks:' + ticks );
        }
    }
}

createPairs([1,2,3,4,5,6,7])

// polynomial O(n^2) it contains 2 loops which increase the time exponentially based on input