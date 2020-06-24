var zigzagLevelOrder = function(root) {
    //i: binary tree
    //o:array of arrays
    
    let result = [];
    
    let recurse = function(root, depth) {
        if(!root) {
            return
        }
        if(!result[depth]) {
            result.splice(depth,0,[])
        }
        console.log(result)
        if(depth%2 === 0) { 
            result[depth].unshift(root.val)
        } else {
            result[depth].push(root.val)
        }
        recurse(root.right,depth+1) 
        recurse(root.left,depth+1)

    }
    
    recurse(root,0)
    
    
    return result
};