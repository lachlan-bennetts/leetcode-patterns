// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let pCurr = p;
  let qCurr = q;
  const pStack: TreeNode[] = [];
  const qStack: TreeNode[] = [];

  if (q && p) {
    qStack.push(q);
    pStack.push(p);
  }

  while (
    (pCurr !== null || pStack.length > 0) &&
    (qCurr !== null || qStack.length > 0)
  ) {
    // 1. Reach the leftmost node of the pCurr node
    while (pCurr !== null && qCurr !== null) {
      pStack.push(pCurr);
      qStack.push(qCurr);
      pCurr = pCurr.left;
      qCurr = qCurr.left;
    }

    if (
      (pCurr && qCurr && pCurr.val !== qCurr.val) ||
      (pCurr && !qCurr) ||
      (!pCurr && qCurr)
    )
      return false;

    // 2. Current must be null at this point
    pCurr = pStack.pop()!;
    qCurr = qStack.pop()!;

    if (
      (pCurr && qCurr && pCurr.val !== qCurr.val) ||
      (pCurr && !qCurr) ||
      (!pCurr && qCurr)
    )
      return false;

    // 3. Visit the right subtree
    pCurr = pCurr.right;
    qCurr = qCurr.right;
  }
  return (
    pCurr === null &&
    qCurr === null &&
    pStack.length === 0 &&
    qStack.length === 0
  );
}
