/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let map=new Map()
    map.set(0,1)
    for (let i=0; i<nums.length; i++) {
        let new_map=new Map()
        for(let [key,value] of map){
            if(new_map.has(key+nums[i])){
                new_map.set(key+nums[i],value+new_map.get(key+nums[i]))
            }else{
                new_map.set(key+nums[i],value)
            }
            if(new_map.has(key-nums[i])){
                new_map.set(key-nums[i],value+new_map.get(key-nums[i]))
            }else{
                new_map.set(key-nums[i],value)
            }
        }
        map=new Map(new_map)
    }
    return map.get(S)||0
};