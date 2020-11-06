/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0)return 0
    const set=new Set(nums)
    let max =1
    while(set.size>max){
        let start =set.values().next().value
        let res=1
        set.delete(start)
        for(let i=1;set.has(start+i);i++){
            set.delete(start+i)
            res++
        }
        for(let i =1;set.has(start-i);i++){
            set.delete(start-i)
            res++
        }
        max = Math.max(max,res)
    }
    return max
};