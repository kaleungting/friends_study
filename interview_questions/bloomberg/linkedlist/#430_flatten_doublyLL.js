/* pseudocode


create a stack with the head inside
create a new dummy node
create a pointer for dummy
run DFS on the head, while there's still stuff in the stack,
pop off stack, make that into the dummy's next, set the node's prev to equal to the prev

if (node.next) add to stack
if (node.child) add to stack, set the child pointer to null, bc we no longer need it

set prev = current node, (will be used again later on to assign pointers)

after everything is done, you need to set the first node's prev to null, because originally it had been set to dummy
return dummy.next
*/

var flatten = function (head) {
  if (!head) return;

  let stack = [head];
  let dummy = new Node(0, null, null, null);
  let prev = dummy;
  while (stack.length) {
    let node = stack.pop();
    prev.next = node;
    node.prev = prev;

    if (node.next !== null) {
      stack.push(node.next);
    }

    if (node.child !== null) {
      stack.push(node.child);
      node.child = null;
    }
    prev = node;
  }

  dummy.next.prev = null;
  return dummy.next;
};


/*
Time Complexity - O(N) traversing through the entire linked-list
Space Complexity - O(N) creating a stack to store the nodes,
    worst case they are only chained with the child pointers, so you will fill up the entire stack with nodes
*/