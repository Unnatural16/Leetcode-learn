/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let i = 0, j = 0, map =[]
    map.length=26
    map.fill(0)
    const A='A'.charCodeAt()
    while (j < s.length) {
        map[s[j].charCodeAt()-A]++
        let flag = false
        const threshold = j - i + 1 - k
        for (let val of map) {
            if (val >= threshold) {
                flag = true
                break
            }
        }
        if (!flag) {
            map[s[i].charCodeAt()-A]--
            i++
        }
        j++
    }
    return j - i
};
console.log(characterReplacement("AAAB",
0))