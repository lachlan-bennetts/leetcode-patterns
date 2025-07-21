class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Iterative solution.
function inorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];
  const stack: TreeNode[] = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    // 1. Reach the leftmost node of the current node
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // 2. Current must be null at this point
    current = stack.pop()!;
    ans.push(current.val);

    // 3. Visit the right subtree
    current = current.right;
  }

  return ans;
}

/*
* Failed Solution
*  const ans: number[] = [];
*   const store: TreeNode[] = [];
*   if (!root) {
*     return [];
*   } else {
*     store.push(root);
*   }

*   while (store.length > 0) {
*     let root = store.at(-1);
*     if (!root) {
*       break;
*     }

*     if (root.left) {
*       store.push(root.left);
*       continue;
*     }
*     store.pop();
*     ans.push(root.val);

*     if (root.right) {
*       store.push(root.right);
*     }
*   }
*   return ans;
* 
* Why did the solution fail? I think there were a couple of reasons. The root.left did work but wouldn't account
* future left cases. Furthermore the assignment around root failed to assign correctly.
*/

// Regression solution.
// const ans: number[] = [];
// const dfs = (root: TreeNode | null) => {
//     if (!root) {
//         return;
//     }
//     console.log(root.left)
//     dfs(root.left);
//     ans.push(root.val);
//     dfs(root.right);
// };
// dfs(root);
// return ans;
