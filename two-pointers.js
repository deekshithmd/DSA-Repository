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
    // let ptr1 = 1, nextNonDup = 1;
    // while (ptr1 < arr.length) {
    //     if (arr[nextNonDup - 1] !== arr[ptr1]) {
    //         arr[nextNonDup] = arr[ptr1];
    //         nextNonDup++
    //     }
    //     ptr1++
    // }
    // return arr.slice(0, nextNonDup)
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return arr.slice(0, i + 1)
}
console.log('Remove duplicates', removeDuplicates([1, 2, 3, 3, 4, 5, 5]))
// i = 1, j = 1, [1, 2, 3, 3, 4, 5, 5]
// i=1, j=2, [1,2,3,3,4,5,5]
// i=2, j=3, [1,2,3,3,4,5,5]
// i=2, j=4, [1,2,3,4,4,5,5]
// i=3, j=5, [1,2,3,4,5,5,5];
// i=4, j=6, [1,2,3,4,5,5,5]

function removeElement(arr, key) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== key) {
            arr[i] = arr[j];
            i++
        }
    }
    return arr.slice(0, i)
}

console.log('remove element', removeElement([1, 2, 4, 4, 5, 3, 4, 4, 4, 4], 4))