
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    if(nums.length<2)return false;
    let sum = nums.reduce((a, b) => a + b);
    if(sum%2!=0)return false;
    let target=sum/2;
    let dp=[]
    for(let i=0; i<nums.length;i++)dp.push([true])
    dp[0][nums[0]]=true
    for(let i=1;i<nums.length;i++){
        for(let j = 1; j <= target; j++){
            if(dp[i-1][j]==true||dp[i-1][j-nums[i]]==true){
                dp[i][j]=true
            }
        }
    }
    return dp[nums.length-1][target]==true
};
console.log(canPartition(
    [1,2,3,6]))