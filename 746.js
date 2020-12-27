/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let one = cost.shift(), two = cost.shift();
    while (cost.length != 0) {
        let next = Math.min(one, two) + cost.shift();
        [one, two] = [two, next];
    }
    return Math.min(one, two);
};
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))