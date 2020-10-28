/*
116. Populating Next Right Pointers in Each Node

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

*/

/*
pseudocode

use a queue, since we need to readjust pointers across the children
shift from the queue to get node
using the length of the queue, it represents how many children are on each level
if (i < length -1) that means we haven't reached the final children yet and we can assign the next pointer to point to the beginning of the queue
add the left and the right to the queue

*/

function connect(root) {
  if (!root) return null;
  let queue = [root];

  while (queue.length) {
    let numOfChildren = queue.length;

    for (let i = 0; i < numOfChildren; i++) {
      let node = queue.shift();
      if (i < numOfChildren - 1) node.next = queue[0];

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
}

/* CONSTANT SPACE using linkedList pointers
pseudocode 

keep track of leftmost (beginning of a level)
each level is like a linkedList

while (leftmost.left) -- meaning once we reach the final level, we are done with the tree
    let curr = leftmost --> establish our current pointer
    while (curr)
        two types of next pointer arrangements 
            1. (EASY) curr's left.next = curr.right (EASY)
            2.  if curr.next exists (HARDER) curr.right.next = curr.next.left --> curr's right.next belongs to another parent node's children
        advance curr pointer
    advance leftmost pointer
*/



function connectConstant(root){
    if (!root) return root;

    let leftmost = root;

    while (leftmost.left){
        let curr = leftmost;
        while (curr){
            curr.left.next = curr.right;
            
            if (curr.next){
                curr.right.next = curr.next.left;
            }

            curr = curr.next;
        }
        leftmost = leftmost.left;
    }
    return root;
}