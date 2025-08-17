import java.util.HashSet;
import java.util.Set;

class ListNode {
  int val;
  ListNode next;

  ListNode(int x) {
    val = x;
    next = null;
  }
}

class Solution {
  public boolean hasCycle(ListNode head) {
    Set<ListNode> set = new HashSet<>();

    ListNode slow = head;
    ListNode fast = head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      set.add(slow);
      fast = fast.next.next;
      if (set.contains(fast))
        return true;
      set.add(fast);

    }
    return false;
  }
}

// Another solution
/**
 * Definition for singly-linked list.
 * class ListNode {
 * int val;
 * ListNode next;
 * ListNode(int x) {
 * val = x;
 * next = null;
 * }
 * }
 */
// class Solution {
// public boolean hasCycle(ListNode head) {

// ListNode slow = head;
// ListNode fast = head;

// while (fast != null && fast.next != null) {
// slow = slow.next;
// fast = fast.next.next;
// if (slow == fast) return true;

// }
// return false;
// }
// }