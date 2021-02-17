/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    let col = nums[0].length
    if (nums.length * col != r * c) {
        return nums
    }
    let res = []
    let n = 0
    for (let i = 0; i < r; i++) {
        res.push([])
        for (let j = 0; j < c; j++) {
            res[i][j] = nums[Math.floor(n / col)][n % col]
            n++
        }
    }
    return res
};
console.log(matrixReshape(
    [[1, 2], [3, 4]],
    4,
    1,
))