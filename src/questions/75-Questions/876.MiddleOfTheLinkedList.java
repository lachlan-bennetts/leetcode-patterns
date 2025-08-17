import java.util.HashMap;

/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
  public ListNode middleNode(ListNode head) {
    if (head.next == null)
      return head;

    HashMap<Integer, ListNode> hashMap = new HashMap<>();
    int i = 1;
    int mid = 1;

    while (head != null) {
      if (i % 2 == 0) {
        mid++;
      }

      hashMap.put(i, head);
      head = head.next;
      i++;
    }

    return hashMap.get(mid);
  }
}

/*
 * Push into array.
 * 1 => 1 is mid.
 * 2 => 2 is mid.
 * 3 => 2 is mid.
 * 4 => 3 is mid.
 * 5 => 3 is mid.
 * 6 => 4
 * 7 => 4
 * 8 => 5
 * ...
 * 29 => 15
 * 30 => 16
 * 31 => 16
 * 32 => 17
 * ...
 */