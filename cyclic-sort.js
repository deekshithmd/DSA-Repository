// Cyclic sort
function cyclicSort(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] !== i + 1) {
            const destinationIndex = arr[i] - 1;
            const temp = arr[i];
            arr[i] = arr[destinationIndex];
            arr[destinationIndex] = temp
        }
        else {
            i++
        }
    }
    return arr
}
console.log('Cyclic sort.....', cyclicSort([2, 5, 1, 3, 4]))

// Find missing number
function findMissingNumber(arr) {
    let i = 0;
    const n = arr.length;
    while (i < n) {
        let destIndex = arr[i]
        if (arr[i] !== arr[destIndex] && arr[i] < n) {
            [arr[i], arr[destIndex]] = [arr[destIndex], arr[i]]
        }
        else {
            i++
        }
    }
    for (i = 0; i < n; i++) {
        if (arr[i] !== i) {
            return i
        }
    }
    return n
}
console.log('Missing number..........', findMissingNumber([4, 0, 1, 3]))