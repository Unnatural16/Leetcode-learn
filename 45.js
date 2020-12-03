/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if(nums.length<2)return 0
    let nextStep=nums[0],index=0
    for(var step=1; nextStep<nums.length-1; step++) {
        let newStep=0
        for(;index<=nextStep; index++) {
            newStep=Math.max(newStep,index+nums[index])
            if(newStep>=nums.length)break
        }
        nextStep=newStep
    }
    return step
};
console.log(jump([1,2,3]))