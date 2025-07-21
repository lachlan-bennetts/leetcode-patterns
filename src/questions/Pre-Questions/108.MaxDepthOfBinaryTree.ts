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

import { TreeNode } from '../interfaces';

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const dfs = (node, depth) => {
    if (!node) return 0;

    const lhsDepth = dfs(node.left, depth + 1);
    const rhsDepth = dfs(node.right, depth + 1);

    const currentDepth =
      lhsDepth > rhsDepth ? lhsDepth : rhsDepth > depth ? rhsDepth : depth;
    return currentDepth;
  };

  return dfs(root, 0);
}
