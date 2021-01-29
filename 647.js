/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length == 0)return 0;
    let pre=1,max=1;
    for(let i = 1; i < nums.length; i++) {
        pre=nums[i]>nums[i-1]?pre+1:1;
        max= Math.max(max,pre);
    }
    return max;
};