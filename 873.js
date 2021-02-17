/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    const map=arr.reduce((total,curr,index)=>{
        total.set(curr,index)
        return total
    },new Map())
    let max=0
    const dp=[[],[2]]
    for(let i=2;i<arr.length;i++){
        dp.push([])
        for(let j=0;j<i;j++){
            const k=map.get(arr[i]-arr[j])
            dp[i][j]= dp[j][k]==null?2:dp[j][k]+1
            max=Math.max(dp[i][j],max)
        }
    }
    return max>2?max:0
};