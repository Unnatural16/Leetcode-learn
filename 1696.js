/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    let queue=[]
    for(let i=0; i<nums.length-1; i++){
        const num = nums[i]
        while(queue[queue.length-1]<num){
            queue.pop()
        }
        queue.push(num)
        if(i>=k&&nums[i-k]===queue[0]){
            queue.shift()
        }
        nums[i+1]+=queue[0]||0
    }
    return nums.pop()
};
console.log(maxResult([40,30,-100,-100,-10,-7,-3,-3],
    2))