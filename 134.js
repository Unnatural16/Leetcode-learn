/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let len = gas.length;
    if(gas.reduce((a,b) => a +b)<cost.reduce((a,b) => a +b)) return -1
    function test(i) {
        let now = gas[i] - cost[i];
        if (now < 0) return [false,i];
        let p = (i + 1) % len;
        while (p != i) {
            now += gas[p] - cost[p]
            if (now < 0) return  [false,i];
            p = (p + 1) % len;
        }
        return [true,i];
    }
    for (let i = 0; i < len;) {
        let res = test(i);
        if (res[0]) return res[1];
        i=res[1]+1
    }
    return -1
};
console.log(canCompleteCircuit([1, 2, 3, 4, 5],
    [3, 4, 5, 1, 2]))