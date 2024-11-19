function twoSum(arr, target) {
    let ptr1 = 0, ptr2 = arr.length - 1;
    while (ptr1 < ptr2) {
        const currentSum = arr[ptr1] + arr[ptr2]
        if (currentSum == target) {
            return [ptr1, ptr2]
        }
        if (currentSum < target) {
            ptr1++
        }
        else {
            ptr2--
        }
    }
    return 0
}

console.log('Two sum problem', twoSum([1, 2, 3, 4, 6], 6))

// using hashtable
function twoSumHash(arr, target) {
    let keys = {}
    for (let i = 0; i < arr.length; i++) {
        if (target - arr[i] in keys) {
            return ([keys[target - arr[i]], i])
        }
        keys[arr[i]] = i
    }
    return 0
}
console.log('Two sum problem hashtable', twoSumHash([1, 2, 3, 4, 6], 6))

function removeDuplicates(arr) {
    let ptr1 = 1, ptr2 = 1;
    while (ptr1 < arr.length) {
        if (arr[ptr2 - 1] !== arr[ptr1]) {
            arr[ptr2] = arr[ptr1];
            ptr2++
        }
        ptr1++
    }
    return arr.slice(0, ptr2)
}
console.log('Remove duplicates', removeDuplicates([1, 2, 3, 3, 4, 5, 5]))