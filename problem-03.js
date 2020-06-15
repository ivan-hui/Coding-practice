var levelOrderBottom = function(root) {
    let res = [];
    let BFS = (root, depth) => {
        if(!root) {
            return
        }
        if(res[depth] == void 0)
            res[depth] = []
 
        res[depth].push(root.val)

        BFS(root.left, depth + 1)
        BFS(root.right, depth + 1)
    }
    BFS(root, 0)
    return res.reverse()
};