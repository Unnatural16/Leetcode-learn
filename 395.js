/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    const map = s.split('').reduce((total, curr) =>
        total.set(curr, (total.get(curr) || 0) + 1)
        , new Map())
    const keys= Array.from(map.entries()).filter(([,value]) =>value<k)
    if(keys.length==0){
        return s.length
    }else{
        return Math.max(...s.split(RegExp(keys.map(item=>item[0]).join('|'))).map(item =>longestSubstring(item, k)))
    }
};
console.log(longestSubstring("aaabb",
3))