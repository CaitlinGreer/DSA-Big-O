// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    let ticks = 0
    for (let i = 0; i < array.length; i++) {
        
        array[i] *= 2;
    }
    return array;
}

// linear O(n) the time is takes to complete is directly related to the input