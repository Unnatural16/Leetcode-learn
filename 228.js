/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length == 0) return []
    if (nums.length == 1) return [nums[0] + '']
    let res = []
    let start = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1] + 1) {
            res.push([start, i - 1])
            start = i
        }
    }
    res.push([start, nums.length - 1])
    return res.map((num) => {
        if (num[0] == num[1]) {
            return nums[num[0]] + ''
        } else {
            return `${nums[num[0]]}->${nums[num[1]]}`
        }
    })
};
console.log(summaryRanges([0, 1]))