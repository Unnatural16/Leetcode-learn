/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (!matrix.length) return 0
    if (matrix.length == 1) return matrix[0].reduce((a, b) => Math.max(a, b))
    if (matrix[0].length == 1) return matrix.reduce((a, b) => [Math.max(a[0], b[0])])
    let max = Math.max(matrix[0].reduce((a, b) => Math.max(a, b)),matrix.reduce((a, b) => [Math.max(a[0], b[0])]))
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) continue;
            matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i][j - 1]) + 1
            max = Math.max(matrix[i][j]**2, max)
        }
    }

    return max
};