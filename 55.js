/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length==1) return true
    for(let i=nums.length-1; i>=0; i--) {
        let flag=false
        if(nums[i]==0){
            for(let j=i-1;j>=0;j--){
                if(nums[j]>i-j||nums[j]==nums.length-j-1){
                    i=j
                    flag=true
                    break
                }
            }
            if(!flag){
                return false
            }
        }
    }
    return true
};
console.log(canJump([2,0,0]))