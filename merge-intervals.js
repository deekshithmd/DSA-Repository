// Merge intervals
function mergeIntervals(arr) {
    let result = [], temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (temp.length == 0) {
            temp = arr[i]
            continue;
        }
        if (arr[i][0] < temp[0]) {
            temp[1] = arr[1]
        } else {
            result.push(temp);
            temp = arr[i]
        }
    }
    return result;
}

console.log('Merge intervals...', mergeIntervals([[1, 3], [2, 5], [6, 8], [7, 9]]))