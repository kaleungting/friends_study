function addTwoNumbers(l1, l2) {
  let stack1 = [];
  let stack2 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let prev = null;
  let carry = 0;
  while (stack1.length || stack2.length) {
    let val1 = stack1.length ? stack1.pop() : 0;
    let val2 = stack2.length ? stack2.pop() : 0;
    let val = val1 + val2 + carry;
    if (val >= 10) {
      carry = 1;
      val %= 10;
    } else {
      carry = 0;
    }
    prev = new ListNode(val, prev); //trick to add to the front of the list
  }

  if (carry > 0) {
    prev = new ListNode(carry, prev);
  }

  return prev;
}

