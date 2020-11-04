/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if(intervals.length==0){
        return [newInterval]
    }
    let buffer = []
    let start
    for (let i = 0; i < intervals.length; i++) {
        if(newInterval[0]<intervals[i][0]&&start==null){
            start =i
        }
        if (intervals[i][1] < newInterval[0] || intervals[i][0] > newInterval[1]) {
            continue;
        } else {
            if(start==null) {start=i}
            buffer.push(intervals[i])
        }
    }
    if(start==null){
        if(newInterval[1]<intervals[0][0]){
            intervals.unshift(newInterval)
        }else{
            intervals.push(newInterval)
        }
        return intervals
    }
    buffer.push(newInterval)
    let res=buffer.reduce((a, b) =>
        [Math.min(a[0], b[0]), Math.max(a[1], b[1])]
    )
    intervals.splice(start,buffer.length-1,res)
    return intervals
};
