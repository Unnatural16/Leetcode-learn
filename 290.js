/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    pattern = pattern.split('')
    s = s.split(' ')
    if(pattern.length!=s.length)return false
    let map = Object.create(null)
    let set=new Set()
    for (let index in pattern) {
        if (map[pattern[index]] == null) {
            if(set.has(s[index])){
                return false
            }else{
                set.add(s[index])
            }
            map[pattern[index]] = s[index]
        } else if (map[pattern[index]] != s[index]) {
            return false
        }
    }
    return true
};
