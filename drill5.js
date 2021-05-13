// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    let ticks = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            ticks++
            return {i, ticks};
        }
    }
}
let array = [1, 2, 3, 4, 5, 6, 7]

let item = 4

console.log(naiveSearch(array, item))

// linear O(n) the running time is directly proportional to the size of the input and only has
// to go through the array one time
