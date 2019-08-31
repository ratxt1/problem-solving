/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * https://leetcode.com/problems/contains-duplicate/
 */
var containsDuplicate = function(nums) {
  let set = new Set(nums)
  return set.size !== nums.length
};