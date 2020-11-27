/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    let map = new Map();
    let len = A.length;
    for (let i = 0; i <len; i++) {
        for (let j = 0; j <len; j++) {
            let res = C[i] + D[j];
            if (map.has(res)) {
                map.set(res, map.get(res) + 1)
            } else {
                map.set(res, 1)
            }
        }
    }
    let count = 0;
    for (let i = 0; i <len; i++) {
        for (let j = 0; j < len; j++) {
            let res = -(A[i] + B[j])
            if (map.has(res)) {
                count += map.get(res)
            }
        }
    }
    return count;
}