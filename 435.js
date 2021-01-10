/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let len = intervals.length;
    for (let i = 0; i < intervals.length - 1;) {
        if (intervals[i][1] > intervals[i + 1][0]) {
            if (intervals[i][1] >= intervals[i + 1][1]) {
                intervals.splice(i, 1)
            } else {
                intervals.splice(i + 1, 1)
            }
        } else {
            i++
        }
    }
    return len - intervals.length
};