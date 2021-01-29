/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    for(let i = nums.length-1; i >=0; i--){
        let up=Math.floor(i/2)-1
        if(nums[up]&&nums[up]<nums[i]){
            [nums[up],nums[i]]=[nums[i],nums[up]]
        }
    }
    return nums
};
function heap(nums,i){
    return nums[i]? {
        val:nums[i],
        left:heap(nums,i*2+1),
        right:heap(nums,i*2+2)
    }:null
}
console.log(heap(findKthLargest([1,2,3,4,5,6,7,2,45,2,4,7,3,2]),0))