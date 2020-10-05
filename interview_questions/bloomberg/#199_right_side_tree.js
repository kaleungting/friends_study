/* pseudocode
    BFS traversal since you are going level by level and you need to return the last node of a specific level

    iterate thru a queue,
    the size of the q will represent how many nodes are on the level
    iterate through the length of the queue,
        if u reached i-1, then you've reached the node at the end, push to result
        add to queue, left and right

*/

var rightSideView = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (i === size - 1) {
        result.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};

/*
Time Complexity - O(N) - iterate thru the tree just once
Space Complexity - O(N) - depending on the balance of the tree, it can be super imbalanced and all node's only have right or left children
*/


