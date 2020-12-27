/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    if (prices.length < 2) return 0
    let profit = 0
    let lowprice = Infinity, highprice = -Infinity
    for (let price of prices) {
        if (highprice - price > fee) {
            profit += Math.max(highprice - lowprice - fee, 0)
            lowprice = highprice = price
        } else {
            lowprice = Math.min(lowprice, price)
            highprice = Math.max(highprice, price)
        }
    }
    console.log(`highPrice${highprice},lowPrice${lowprice}`)
    profit += Math.max(highprice - lowprice - fee, 0)
    return profit
};
console.log(maxProfit([ 1, 2, 5, 4],
    1))