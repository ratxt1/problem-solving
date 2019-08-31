/**
 * @param {number[]} nums
 * @return {number[]}
 
 Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

Note: Please solve it without division and in O(n).

https://leetcode.com/problems/product-of-array-except-self/
 */
var productExceptSelf = function(nums) {
  let arrayOfProductsToLeftOfIdx = []
  let tempProd = 1
  for (let i = 0; i < nums.length; i++) {
    arrayOfProductsToLeftOfIdx.push(tempProd)
    tempProd *= nums[i]
  }
  tempProd = 1
  let arrayOfProductsToRightOfIdx = []
  for (let i = nums.length-1; i >= 0; i--) {
    arrayOfProductsToRightOfIdx.push(tempProd)
    tempProd *= nums[i]
  }
  arrayOfProductsToRightOfIdx.reverse()
    let ret = []
  for (let i = 0; i < nums.length; i++) {
    ret.push(arrayOfProductsToLeftOfIdx[i] * arrayOfProductsToRightOfIdx[i])
  }
  return ret
};