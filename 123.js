/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit=0;
    let profits=[]
    for(let index=0;index<prices.length;index++) {
        profit=Math.max(profit,check(prices.slice(0,index))+check(prices.slice(index)));
        profits.push(profit)
    }
    console.log(profits)
    return profit;
};
function check(nums){
    if(nums.length<2){
        return 0
    }
    let min=Infinity
    let profit=-Infinity
    for(let num of nums){
        profit=Math.max(profit,num-min)
        min=Math.min(num,min)
    }
    return profit>0?profit:0
}
console.log(maxProfit([1,2,3,4] ))