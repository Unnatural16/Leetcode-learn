
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    function swap(a, b) {
        [A[a], A[b]] = [A[b], A[a]]
    }
    let i = 0, j = 1
    while (A[i] % 2 == 0) {
        i += 2
    }
    while (A[j] % 2 == 1) {
        j += 2
    }
    while (i < A.length && j < A.length) {
        swap(i, j)
        while (A[i] % 2 == 0) {
            i += 2
        }
        while (A[j] % 2 == 1) {
            j += 2
        }
    }
    return A
};