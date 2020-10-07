// 34. 在排序数组中查找元素的第一个和最后一个位置
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length == 0) return [-1, -1];
    let code = function (left, right) {
        if (left == right) return (nums[left] == target) ? [left, right] : [-1, -1]
        let flag = (right - left == 1)
        let half = parseInt((left + right) / 2)
        let left_result = flag ? code(left, left) : code(left, half)
        let right_result = flag ? code(right, right) : code(half + 1, right)
        if (left_result[0] == -1) {
            return right_result
        }
        if (right_result[0] == -1) {
            return left_result
        }
        return [Math.min(left_result[0], right_result[0]), Math.max(left_result[1], right_result[1])]
    }
    return code(0, nums.length - 1)
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
//分治法，对每次返回的范围做并集
// 执行用时：80 ms, 在所有 JavaScript 提交中击败了77.78%的用户
// 内存消耗：40.8 MB, 在所有 JavaScript 提交中击败了5.03%的用户