/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    let i = 0, j = 0
    let num = 0, max = 0
    while (j < A.length) {
        const res=num-K
        if (res<0) {
            num += (1 - A[j++])
            if (num <= k) {
                max = Math.max(max, j - i)
            }
        }else if (res===0){
            
        }
         else {
            num -= (1 - A[i++])
        }
    }
    return max
};
