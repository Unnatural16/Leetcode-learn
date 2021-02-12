const A = 'a'.charCodeAt()
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let map = Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        map[s1.charCodeAt(i) - A]--
    }
    for (let i = 0; i < s1.length; i++) {
        map[s2.charCodeAt(i) - A]++

    }
    if (map.every(item => item == 0)) {
        return true
    }
    for (let i = s1.length; i < s2.length; i++) {
        map[s2.charCodeAt(i) - A]++
        map[s2.charCodeAt(i - s1.length) - A]--
        if (map[s2.charCodeAt(i) - A] == 0 && map[s2.charCodeAt(i - s1.length) - A] == 0) {
            if (map.every(item => item == 0)) {
                return true
            }

        }
    }
    return false
};
