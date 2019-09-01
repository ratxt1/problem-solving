/**
 * @param {number[]} height
 * @return {number}
 * 
 * https://leetcode.com/problems/container-with-most-water/
 */

 /** The insight is if we take a pointer from both ends
  * if one side's height is at 5 say and the other is at 7
  *  that means the area will be 5*distance. And within the smaller
  *  segment no area that contains the 5 can be a greater area since the height
  * is already maxed out and the distance can only decrease, thus we don't have to
  * look at any other areas that contain that height and can increment the pointer
  * attached to the 5. This principle repeats and let's us compute
  * the max area in linear time.
  */

var maxArea = function(height) {
  let maxArea = 0
  start = 0
  end = height.length - 1
  
  while (start < end) {
    let area = Math.min(height[end], height[start]) * (end-start)
    if (area > maxArea) {
      maxArea = area
    }
    if (height[end] > height[start]) {
      start++
    } else {
      end--
    }
  }
  return maxArea
};