/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max=-Infinity
    function findAllNodes(node) {
        if(node===null){
            return -Infinity
        }
        const left = findAllNodes(node.left)
        const right = findAllNodes(node.right)
        const up=node.val+Math.max(0,left,right)
        max=Math.max(max,up,node.val+left+right)
        return up
    }
    findAllNodes(root)
    return max
};