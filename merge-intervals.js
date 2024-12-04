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

// insert interval, given non overlapping intervals
function insertInterval(intervals, intervalToInsert) {
    let finalIntervals = [], i = 0;

    while (i < intervals.length && intervals[i][1] < intervalToInsert[0]) {
        finalIntervals.push(intervals[i])
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= intervalToInsert[1]) {
        intervalToInsert[0] = Math.min(intervalToInsert[0], intervals[i][0]);
        intervalToInsert[1] = Math.max(intervalToInsert[1], intervals[i][1]);
        i++;
    }

    finalIntervals.push(intervalToInsert)

    while (i < intervals.length) {
        finalIntervals.push(intervals[i])
        i++
    }
    return finalIntervals
}

console.log('Final set of intervals....', insertInterval([[1, 3], [5, 7], [8, 12]], [4, 6]))

// find intersection of intervals

function intersectionOfIntervals(firstIntervals, secondIntervals) {
    let result = [], i = 0, j = 0;

    while (i < firstIntervals.length && j < secondIntervals.length) {
        firstOverlapsSecond = firstIntervals[i][0] >= secondIntervals[j][0] && firstIntervals[i][0] <= secondIntervals[j][1];
        secondOverlapsFirst = firstIntervals[i][0] <= secondIntervals[j][0] && firstIntervals[i][1] >= secondIntervals[j][0];

        if (firstOverlapsSecond || secondOverlapsFirst) {
            const out = [Math.max(firstIntervals[i][0], secondIntervals[j][0]), Math.min(firstIntervals[i][1], secondIntervals[j][1])]
            result.push(out)
        }
        if (firstIntervals[i][1] > secondIntervals[j][1]) {
            j++
        }
        else {
            i++
        }
    }
    return result
    // while (i < firstIntervals.length && j < secondIntervals.length) {
    //     checkForOverlap = (firstIntervals[i][0] <= secondIntervals[j][0] && firstIntervals[i][1] >= secondIntervals[j][0]) || (firstIntervals[i][0] >= secondIntervals[j][0] && firstIntervals[i][0] <= secondIntervals[j][1])

    //     if (checkForOverlap) {
    //         result.push([Math.max(firstIntervals[i][0], secondIntervals[j][0]), Math.min(firstIntervals[i][1], secondIntervals[j][1])])
    //     }
    //     if (firstIntervals[i][1] > secondIntervals[j][1]) {
    //         j++;
    //     } else {
    //         i++
    //     }
    // }
    // return result
}

console.log('Intersection of intervals...', intersectionOfIntervals([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]]))

// conflicting appointments
function findConflictingAppointments(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i - 1][1] > intervals[i][0]) {
            return false
        }
    }
    return true
}

console.log('Can person attend all appointments', findConflictingAppointments([[1, 4], [2, 5], [7, 9]]))
console.log('Can person attend all appointments', findConflictingAppointments([[6, 7], [2, 4], [8, 12]]))