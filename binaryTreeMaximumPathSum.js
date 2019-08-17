/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * 
 * 
 */


var maxPathSum = function(root) {
  let result = root.val
  function maxSumHelper(node) {
    if (!node) return 0
    let leftSum = maxSumHelper(node.left)
    let rightSum = maxSumHelper(node.right)
    result = Math.max(result, node.val + leftSum + rightSum)
    return Math.max(0, node.val + leftSum, node.val + rightSum) 
  }
  maxSumHelper(root)
  return result
};