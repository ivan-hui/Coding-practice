/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    var recurse = function(root) {
        //base case
        var result = true    
        console.log(root.left)
        console.log(root.left.val)
        if (root.left.val !== root.right.val) {
            result = false;            
        }
        
        //recurse case
        if (root.left && root.right){
            recurse(root.left, root.right)            
        }
    }
    
    recurse(root)
    
    return result 
};