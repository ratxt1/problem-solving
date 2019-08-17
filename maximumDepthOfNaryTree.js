/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */

// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

var maxDepth = function(root) {
  if (root === null) {
      return 0
  } else {
      return root.children.reduce((acc, node) => {
         return Math.max(acc, maxDepth(node) + 1)
      }, 1)
  }
};