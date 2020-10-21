var isValidBST = function (root) {
  if (!root) return true;
  let stack = [{ node: root, upperBound: Infinity, lowerBound: -Infinity }];

  while (stack.length) {
    let { node, upperBound, lowerBound } = stack.pop();

    if (node.val <= lowerBound || node.val >= upperBound) return false;

    if (node.left) {
      stack.push({ node: node.left, lowerBound, upperBound: node.val });
    }

    if (node.right) {
      stack.push({ node: node.right, lowerBound: node.val, upperBound });
    }
  }

  return true;
};

/*
create a stack with root in it
a binary search tree is valid

if it's left is less than its parent
if it's right is greater than its parent

base case, if node is greater than it's upperBound or if it's lower than it's lowerBound

push left and right, changing it's lowerBound and upperBound


*/
