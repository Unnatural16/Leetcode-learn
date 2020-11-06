/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    return arr.sort((a, b) => {
        const flag = nums(a) - nums(b);
        return flag==0?a-b:flag;
    });
};
function nums(n) {
    let res = 0;
    while (n > 1) {
        if (n & 1 == 1) {
            res++
        }
        n = n >> 1
    }
    return n ? res + 1 : res
}
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]))