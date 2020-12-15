/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    nums=(N+'').split('')
    let mark=nums.length
    for(let i=nums.length-1; i>0; i--){
        if(nums[i]<nums[i-1]){
            nums[i-1]--
            mark=i
        }
    }
    for(let i=mark;i<nums.length; i++){
        nums[i]='9'
    }
    return nums.join('')
};
