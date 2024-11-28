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
    // let sum = 0, windowSum = 0;
    // for (let i = 0; i < n; i++) {
    //     windowSum += arr[i]
    // }
    // for (let i = n; i < arr.length; i++) {
    //     windowSum += arr[i] - arr[i - n]
    //     sum = Math.max(windowSum, sum)
    // }
    // return sum
    let windowSum = 0, maxSum = 0, start = 0;
    for (let end = 0; end < arr.length; end++) {
        windowSum += arr[end];
        if (end >= n - 1) {
            maxSum = Math.max(windowSum, maxSum);
            windowSum -= arr[start];
            start++;
        }
    }
    return maxSum;
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
console.log("Sliding window min sum", minSumSubArray([2, 1, 5, 1, 3, 2], 3))

function minSubArraySum(arr, s) {
    let windowSum = 0, minSubArrayLength = arr.length, windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        while (windowSum >= s) {
            minSubArrayLength = Math.min(minSubArrayLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart]
            windowStart++;
        }
    }

    return minSubArrayLength
}

console.log("Sliding window min subarry sum", minSubArraySum([2, 1, 5, 1, 3, 2], 6))

//longest substring with k distinct characters
function longestSubstringWithKDistinct(str, k) {
    let charactersObj = {}, windowStart = 0, maxLength = 0;
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        if (!(str[windowEnd] in charactersObj)) {
            charactersObj[str[windowEnd]] = 0
        }
        charactersObj[str[windowEnd]]++;
        while (Object.keys(charactersObj) > k) {
            charactersObj[str[windowStart]]--;
            if (charactersObj[str[windowStart]] === 0) {
                delete charactersObj[str[windowStart]];
            }
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

console.log('Longest substring with k distinct characters', longestSubstringWithKDistinct('araaci', 2))

// fruits into basket (longest subarray with 2 distinct characters)

function fruitsIntoBasket(arr) {
    let charactersObj = {}, windowStart = 0, maxCount = 0;;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        if (!(arr[windowEnd] in charactersObj)) {
            charactersObj[arr[windowEnd]] = 0;
        }
        charactersObj[arr[windowEnd]]++;
        while (Object.keys(charactersObj)?.length > 2) {
            charactersObj[arr[windowStart]]--;
            if (charactersObj[arr[windowStart]] === 0) {
                delete charactersObj[arr[windowStart]]
            }
            windowStart++;
        }
        maxCount = Math.max(maxCount, windowEnd - windowStart + 1)
    }
    //console.log(charactersObj)
    return maxCount;

}

console.log('Fruits into basket...', fruitsIntoBasket([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]))
