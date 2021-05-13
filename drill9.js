// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(findRandomElement([1,2,3,4,5,6]))

//constant O(n) no matter what size the input it will still take the same amount of time to complete