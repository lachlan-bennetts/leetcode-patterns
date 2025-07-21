/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  const nodeSet = new Set();
  nodeSet.add(head?.val);
  let current = new ListNode(0, head);
  let bool = false;

  while (bool) {
    if (current.next === null) break;
    if (nodeSet.has(current.next.val)) {
      bool = true;
    } else {
      nodeSet.add(current.next.val);
      current = current.next;
    }
  }
  return bool;
}
