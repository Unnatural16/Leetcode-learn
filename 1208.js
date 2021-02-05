/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
    let buffer = []
    for (let i = 0; i < s.length; i++) {
        buffer[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i))
    }
    let i = 0, j = 0, sum = buffer[0],max=0;
    while (j < s.length ) {
        if (sum > maxCost) {
            sum -= buffer[i]
            i++;
        }else{
            max =j-i+1
        }
        j++;
        sum += buffer[j]
    }
    return max
};