
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let first = 0,last = nums.length-1;
    for(let i=0;i<=last;i++) {
        if(nums[i]==0){
            [nums[i],nums[first]] =[nums[first],nums[i]]
            first++
        }else if(nums[i]==2){
            [nums[i],nums[last]] =[nums[last],nums[i]]
            last--
            i--
        }
    }
};