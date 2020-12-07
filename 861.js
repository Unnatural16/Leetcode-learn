/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
    for (let colum of A) {
        if (colum[0] == 0) {
            for (let row in colum) {
                colum[row] = 1 - colum[row];
            }
        }
    }
    for (let row in A[0]) {
        if (A.reduce((a, b) => a + b[row], 0) < A.length / 2) {
            A.forEach(colum => colum[row] = 1 - colum[row]);
        }
    }
    return A.reduce((total, row) => total+Number('0b'+row.join('')), 0)
};
console.log(matrixScore([[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]]))