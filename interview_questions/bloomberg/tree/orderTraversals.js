var inorderTraversal = function (root) {
  let arr = [];
  let stack = [];
  let curr = root; //used as a pointer
  while (stack.length || curr) {
    while (curr) {
      //keep traversing through the left side of the tree, adding it to the stack as you go
      stack.push(curr);
      curr = curr.left; //advancing the pointer to the next left node
    }
    //once you have reached the leftest part of the tree, you can start adding it into the results array
    curr = stack.pop(); //pop it off the stack
    arr.push(curr.val); //add it to the array
    curr = curr.right; //if you reach a node where it has a right, before you add the right, you want to add it to the stack, and traverse through that entire tree before continuing
  }

  return arr;
};
