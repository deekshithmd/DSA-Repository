// Sliding window pattern
// Bruteforce
// function maxSumSubArray(arr, n) {
//     let sum = 0;
//     for (let i = 0; i <= arr.length - n; i++) {
//         for (let j = i; j <= arr.length - n; j++) {
//             let k = 0, tempSum = 0;
//             while (k < n) {
//                 tempSum += arr[j + k]
//                 k++;
//             }
//             if (sum < tempSum) {
//                 sum = tempSum
//             }
//         }
//     }
//     return sum;
// }
// console.log("Bruteforce",maxSumSubArray([2, 1, 5, 1, 3, 2], 3))
// Sliding window
function maxSumSubArray(arr, n) {
    let sum = 0, windowSum = 0;
    for (let i = 0; i < n; i++) {
        windowSum += arr[i]
    }
    for (let i = n; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - n]
        sum = Math.max(windowSum, sum)
    }
    return sum
}
console.log("Sliding window max sum", maxSumSubArray([2, 1, 5, 1, 3, 2], 3))

function minSumSubArray(arr, k) {
    let sum = 0, windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i]
    }
    sum = windowSum
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        sum = Math.min(windowSum, sum)
    }
    return sum
}
console.log("sliding window min sum", minSumSubArray([2, 1, 5, 1, 3, 2], 3))
