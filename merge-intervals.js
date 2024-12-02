// Merge intervals
function mergeIntervals(intervals) {
    let result = [], temp = [];
    intervals.sort((a, b) => a[0] - b[0])
    if (intervals?.length < 2) {
        return intervals;
    }

    for (let i = 0; i < intervals.length; i++) {
        if (temp.length == 0) {
            temp = intervals[i]
            continue;
        }
        if (intervals[i][0] < temp[1]) {
            temp[1] = intervals[i][1]
        } else {
            result.push(temp);
            temp = intervals[i]
        }
        if (i == intervals.length - 1) {
            result.push(temp)
        }
    }
    return result;
}

// inplace merging
function mergeIntervalsInplace(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    if (intervals.length < 2) {
        return intervals
    }
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const previous = intervals[i - 1];
        if (previous[1] >= current[0]) {
            // intervals[i - 1][1] = current[1];
            intervals[i - 1] = [previous[0], Math.max(previous[1], current[1])]
            intervals.splice(i, 1)
        }
    }
    return intervals
}

console.log('Merge intervals...', mergeIntervals([[7, 9], [1, 3], [6, 8], [2, 5],]))
console.log('Merge intervals inplace...', mergeIntervalsInplace([[7, 9], [1, 3], [6, 8], [2, 5],]))