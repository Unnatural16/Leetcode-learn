/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    if (k < 2 * cardPoints.length) {
        let j = 0, sum = 0
        while (j < k) {
            sum += cardPoints[j]
            j++
        }
        let i = cardPoints.length - 1
        j--
        let max = sum
        while (j >= 0) {
            sum += cardPoints[i--]
            sum -= cardPoints[j--]
            max = Math.max(max, sum)
        }
        return max
    }
};