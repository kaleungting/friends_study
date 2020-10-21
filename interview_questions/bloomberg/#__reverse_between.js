var reverseBetween = function (head, m, n) {
  let curr = head;
  let prev = null;
  while (m > 1) {
    //advance curr pointer until the point where you know you want to start reversing the linkedList
    prev = curr;
    curr = curr.next;
    m--;
    n--;
  }

  let connection = prev; //store connection as prev, this is where you want to connect the newly reversedLL to later on
  let tail = curr; //store tail as curr, this will eventually become the end of the list, you'll need it to attach the rest of the linkedList to
  while (n > 0) {
    //for n-times, reverse the linkedlist
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    n--;
  }

  if (connection) {
    //if connection has a value, that means you can connect the point at which you've stopped with the new ll
    connection.next = prev;
  } else {
    head = prev; // it means you dont have any nodes in the beginning, and head is prev
  }
  x;
  tail.next = curr; //connect the tail with the rest of the nodes, where you left off (curr)
  return head;
};
