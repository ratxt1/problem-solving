/**
 * @param {number[]} prices
 * @return {number}
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
 */

//similar soution to maximumSubarray

var maxProfit = function(prices) {
  if (prices.length < 2) return 0
  let bestProfit = 0
  let lowestPoint = prices[0]
  let bestProfitSellingStockAtCurrIdx
  for (let i = 1; i < prices.length; i++) {
    bestProfitSellingStockAtCurrIdx = prices[i] - lowestPoint
    bestProfit = Math.max(bestProfit, bestProfitSellingStockAtCurrIdx)
    lowestPoint = Math.min(prices[i], lowestPoint)
  }
  return bestProfit  
};