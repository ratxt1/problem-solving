/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode.com/problems/maximum-subarray/submissions/
 */


/** 
 * O(n^2) solution 
 * Iterate through the array finding the sum of all possible subwindows and memoize maxSum
 * (since the sum of the subwindow between nums(i, j) is (i, j-1) + nums[j]
 * we do not have to actually iterate over all possible subwindows which is On^3)
 */
var maxSubArray = function(nums) {
  let maxSum = nums[0]
  let currSum = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      currSum += nums[j]
      if (currSum > maxSum) {
        maxSum = currSum
      }
    }
    currSum = 0
  }
  return maxSum
};

/**
 * Linear time solution
 * 
 * Here we are more efficient by knowing that the maxSum for an array from (1, j),
 * is either the max sum of the sub array (1, j-1) or the maxSum of a contiguous subarray that contains
 * the current index j.
 */
var maxSubArray = function(nums) {
  let maxSum = nums[0]
  let maxSumIncludingCurrIndex = nums[0]
  for (let i = 1; i < nums.length; i++) {
    maxSumIncludingCurrIndex = Math.max(nums[i], nums[i] + maxSumIncludingCurrIndex)
    maxSum = Math.max(maxSum, maxSumIncludingCurrIndex)
  }
  return maxSum
};