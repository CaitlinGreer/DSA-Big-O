// In this example, we return to the problem of searching using a more sophisticated 
// approach than in naive search, above. Assume that the input array is always sorted. 
// What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let item = 7

console.log(efficientSearch(array, item))

//polynomial O(n^2) running time grows with increase in input