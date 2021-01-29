/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    K = K.toString().split('')
    let len = Math.max(K.length, A.length)
    let res = []
    let flag = false;
    for (let i = 0; i < len; i++) {
        let a = A[A.length - 1 - i] || 0
        let b = +K[K.length - 1 - i] || 0
        let num = a + b + flag
        flag = num >= 10
        res.unshift(num % 10)
    }
    if(flag) {
        res.unshift(1)
    }
    return res
};
console.log(addToArrayForm([2, 7, 4],
    181))