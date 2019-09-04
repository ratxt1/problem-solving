/**
 * @param {number} n
 * @return {number}
 * 
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.
 */

/**
 * This is just a fibonacci sequence (since the amount of ways to get 
 * to the nth stair are the amount of ways of getting to the n-1th stair and climbing 1 step
 * and the amount of ways of getting to the n-2th stair and climbing 2 steps.
 * 
 * We create the fibonacci sequence in linear time using dynamic programming.
 */
var climbStairs = function(n) {
  if (n === 1 ) return 1
  prevNumOfStairs = 1
  currNumOfStairs = 2
  for (let i = 2; i < n; i++) {
    let tmp = prevNumOfStairs
    prevNumOfStairs = currNumOfStairs
    currNumOfStairs += tmp
  }  
  return currNumOfStairs
};