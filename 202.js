/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const SadSet = new Set();
    while (n != 1) {
        if (SadSet.has(n)) return false;
        SadSet.add(n)
        const arr = n.toString().split('').map(item => parseInt(item))
        n=arr.reduce((a, b)=>a+b**2)-arr[0]+arr[0]**2
    }
    return true
}
console.log(isHappy(19))