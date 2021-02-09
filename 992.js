/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
    function judge(K) {
        let res = 0, map = [], num = 0
        map.length = A.length + 1
        map.fill(0)
        for (let left = 0, right = 0; right < A.length;) {
            if (map[A[right]] == 0) {
                num++;
            }
            map[A[right++]]++
            while (num > K) {
                if (map[A[left]] == 1) {
                    num--;
                }
                map[A[left++]]--
            }
            res += right - left
        }
        return res
    }
    return judge(K) - judge(K - 1)
};
