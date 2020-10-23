/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    if (nums.length == 0) return []
    if (nums.length == 1) { return [[nums[0]]] }
    let pre=new Set()
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if(pre.has(nums[i])){
            continue
        }else{
            pre.add(nums[i])
        }
        let sub_res = permuteUnique(nums.slice(0, i).concat(nums.slice(i + 1, nums.length)))
        sub_res.forEach((item) => { 
            item.unshift(nums[i])
            res.push(item) 
        })
    }
    return res
};

console.log( permuteUnique([3,3,0,3]))