/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=[]
    let profit =[]
    let rebuy=[]
    let finalProfit =[]
    let flag=Infinity
    for(let i=0; i<prices.length; i++) {
        min[i]=Math.min(flag,prices[i])
        flag =min[i]
    }
    flag = -Infinity
    for(let i=0; i<prices.length; i++){
        profit[i]=Math.max(flag,prices[i]-min[i])
        flag = profit[i]
    }
    flag = -Infinity
    for(let i=0; i<prices.length; i++){
        rebuy[i]=Math.max(flag,profit[i]-prices[i])
        flag = rebuy[i]
    }
    flag = -Infinity
    for(let i=0; i<rebuy.length; i++){
        finalProfit[i]=Math.max(flag,prices[i]+rebuy[i])
        flag = finalProfit[i]
    }
    return finalProfit.pop()
};
console.log(maxProfit(
    [3,3,5,0,0,3,1,4]))