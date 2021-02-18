/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    let i = 0, j = 0
    let num = 0, max = 0
    while (j < A.length) {
        if (num <= K) {
            num += (1 - A[j++])
            if (num <= K) {
                max = Math.max(max, j - i)
            }
        } else {
            num -= (1 - A[i++])
        }
    }
    return max
};