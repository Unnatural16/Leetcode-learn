/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(n==0) return 0
    if(m==1) return 1
    let dp=[[]]
    for(let i=0; i<n; i++) {
        dp[0][i]=1
    }
    for(let i=1; i<m; i++) {
        dp[i]=[]
        dp[i][0]=1
    }
    for(let i = 1; i <m;i++){
        for(let j = 1; j <n;j++){
            dp[i][j]=dp[i-1][j]+dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};