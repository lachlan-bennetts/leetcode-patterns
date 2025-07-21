/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }
  const lhs = root.left;
  const rhs = root.right;
  let matched = true;

  const dfs = (lhs: TreeNode | null, rhs: TreeNode | null) => {
    if (!matched) {
      return;
    }
    if ((lhs && !rhs) || (!lhs && rhs)) {
      matched = false;
      return;
    }
    if (!lhs || !rhs) {
      return;
    }
    if (lhs.val !== rhs.val) {
      matched = false;
      return;
    }

    dfs(lhs.left, rhs.right);
    dfs(lhs.right, rhs.left);
  };

  dfs(lhs, rhs);
  return matched;
}
