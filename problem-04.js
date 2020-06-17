var hasPathSum = function(root, sum) {
    var result = false
    
    var counter = 0;
    
    var recurse = function(root, counter, sum) {
        if(!root) {
            return false
        }
        counter = counter + root.val
        console.log(counter)
        
        if (!root.left && !root.right) {
            if (counter === sum) {
                result = true
            }
        }
        
        recurse(root.left,counter,sum)
        recurse(root.right,counter,sum)
    }
    
    recurse(root, counter, sum)
    
    return result
};