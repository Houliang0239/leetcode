/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
    if(!preorder.length || !inorder) return null
    let leftTree = inorder.slice(0, inorder.indexOf(preorder[0]))
    let rightTree = inorder.slice(inorder.indexOf(preorder[0]) + 1, inorder.length)
    console.log(leftTree, rightTree)
    let root = new TreeNode(preorder.shift())
    root.left = buildTree(preorder, leftTree)
    root.right = buildTree(preorder, rightTree)
    return root
};

let preorder = [3, 9, 20, 15, 7]
let inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder))