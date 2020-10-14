var sortList = function (head) {
  if (head === null || head.next === null) return head;

  let [left, right] = getMid(head);
  let dummy = new ListNode("dummy");
  dummy.next = merge(sortList(left), sortList(right));

  return dummy.next;
};

function merge(left, right) {
  let dummy = new ListNode("dummy");
  let p1 = left,
    p2 = right,
    p3 = dummy;

  while (p1 && p2) {
    if (p1.val > p2.val) {
      p3.next = p2;
      p2 = p2.next;
    } else {
      p3.next = p1;
      p1 = p1.next;
    }
    p3 = p3.next;
  }

  p3.next = p1 || p2;

  return dummy.next;
}

function getMid(head) {
  let slow = head,
    fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = head;
  let left = fast;
  let right = slow.next;
  slow.next = null;

  return [left, right];
}

/*
pseudocode

use mergeSort to solve the problem
have a helper function that splits the list up in two halves (left and right)
    - slow, fast pointer
    - advance both
    - reset fast back to head, now slow pointer is at mid
    - set left to be fast
    - set right to be slow.next
    - set slow.next to null, this cuts the rest of the left's list 
    
use getMid to split the list, now you have two sides (left and right);
call sortList(left) and sortList(right)

use helper function merge on sortedLeft and sortedRight
*/
