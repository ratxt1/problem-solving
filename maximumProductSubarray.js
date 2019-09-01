/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/maximum-product-subarray/ 
 */

//TODO: linear time solution
var maxProduct = function(nums) {
  let maxProd = nums[0]
  let currProd = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      currProd *= nums[j]
      if (currProd > maxProd) {
        maxProd = currProd
      }
    }
    currProd = 1
  }
  return maxProd
};

/** Similar to maximumSubarray we store the maximum product
 * and the maximum product that includes the current index
 * only this time we also need to store the minimum product since 
 * with negative numbers that product can become the maximum product
 * when the negatives cancel each other out.
 */

var maxProduct = function(nums) {
  let maxProd = nums[0]
  let maxProdIncludingCurrIdx = nums[0]
  let minProdIncludingCurrIdx = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      let tmp = maxProdIncludingCurrIdx
      maxProdIncludingCurrIdx = Math.max(nums[i], nums[i]* minProdIncludingCurrIdx)
      minProdIncludingCurrIdx = Math.min(nums[i], nums[i]* tmp)
    } else {
      maxProdIncludingCurrIdx = Math.max(nums[i], nums[i]* maxProdIncludingCurrIdx)
      minProdIncludingCurrIdx = Math.min(nums[i], nums[i]* minProdIncludingCurrIdx)
    }
    maxProd = Math.max(maxProd, maxProdIncludingCurrIdx)
  }
  return maxProd
};

