
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let i = 0, j = 1
    while (A[i] % 2 == 0) {
        i += 2
    }
    while (A[j] % 2 == 1) {
        j += 2
    }
    while (i < A.length && j < A.length) {
        [A[a], A[b]] = [A[b], A[a]]
        while (A[i] % 2 == 0) {
            i += 2
        }
        while (A[j] % 2 == 1) {
            j += 2
        }
    }
    return A
};