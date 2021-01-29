/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length==0) return -1;
    if(nums.length==1)return 0
    let sum=nums.reduce((a,b)=>a+b)
    let left=0
    for(let i=0;i<nums.length;i++){
        left+=nums[i-1]||0
        sum-=nums[i]
        if(left==sum){
            return i
        }
    }
    return -1
};
console.log(pivotIndex([1,7,3,6,5,6]))