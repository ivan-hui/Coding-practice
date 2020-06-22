var levelOrder = function(root) {
    //i:binary tree 
    //o:array of arrays 
    
    var result = [];
    
    var recurse = function(root, depth) {
        console.log(depth)
        if(!root) {
            return
        }
        
        if(!result[depth]) {
            result.splice(depth,0,[])
        }
        result[depth].push(root.val)

        recurse(root.left,depth+1)
        recurse(root.right,depth+1)        
        
    }
    recurse(root,0)
    
    return result
    
};