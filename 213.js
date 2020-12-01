/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==1)return nums[0]
    if(nums.length==2)return Math.max(nums[1],nums[0])
    function find(start,end){
        let pre=0,now=0
        for(let i=start;i<end;i++){
            let last=Math.max(pre+nums[i],now)
            pre=now
            now=last
        }
        return now
    }
    return Math.max(find(0,nums.length-1),find(1,nums.length))
};
console.log(rob([1,2,1,1]))