/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map=new Map();
    for(let str of strs){
        let symbol = str.split('').sort().join('')
        if(map.has(symbol)){
            map.get(symbol).push(str);
        }else{
            map.set(symbol,[str]);
        }
    }
    return Array.from(map.values())
};