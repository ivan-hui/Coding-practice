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
    
var maxDepth = function(root) {
    if (!root) return 0;
    let max = 0;
    
    const dfs = (node, depth) => {
      if (!node.left && !node.right) {
        max = Math.max(depth, max);
        return;
      }
      if (node.left) dfs(node.left, depth + 1);
      if (node.right) dfs(node.right, depth + 1);
    }
  
    dfs(root, 1);
    return max
  };