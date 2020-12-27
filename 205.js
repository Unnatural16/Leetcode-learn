/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map=new Map()
    let otherMap=new Map()
    for(let i=0; i<s.length; i++){
        if(map.has(s[i])){
            if(map.get(s[i])!=t[i]){
                return false
            }
        }else{
            if(otherMap.has(t[i])&&otherMap.get(t[i])!=s[i]){
                return false
            }
            map.set(s[i],t[i])
            otherMap.set(t[i],s[i])
        }
    }
    return true
};