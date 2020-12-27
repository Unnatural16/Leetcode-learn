/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b)=>a -b);
    s.sort((a, b)=>a -b);
    let res = 0
    for (let i = 0, j = 0; i < s.length && j < g.length; i++) {
        if (s[i] >= g[j]) {
            res++;
            j++
        }
    }
    return res
};
console.log(findContentChildren([10, 9, 8, 7],
    [5, 6, 7, 8]))