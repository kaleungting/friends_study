/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7


*/

/* pseudocode
    first digit in the preOrder is always going to be the root value

    everything to the left side of where ROOT is in inorder array will be the left tree
    everything to the right side of where ROOT is will be the right tree

    iterate through inorder and set index to the ele;

    use a hashMap to keep track of the indices of the inOrder. so you can key into hashMap to get the index right before, and after the ROOT
        this will be useful in our helper function that takes in a (start, end), - we we recursively call it to build the left side and the right side of the tree

    helper(start,end)
        if (start > end) return null
        shift preOrder and turn that into a new Node called root
        root.left will just be all of the helper(start, hash[root] - 1)
        root.right will be helper(hash[root] + 1, end)
        return root

    return helper(0, inorder.length-1)
*/

function buildTree(preorder, inorder) {
  let tracker = {};

  for (let i = 0; i < inorder.length; i++) {
    tracker[inorder[i]] = i;
  }

  function helper(start, end) {
    if (start > end) return null;

    let root = new TreeNode(preorder.shift());
    root.left = helper(start, tracker[root.val] - 1);
    root.right = helper(tracker[root.val] + 1, end);
    return root;
  }

  return helper(0, inorder.length - 1);
}

function returnSumOfOdd(n) {
  let total = 0;
  if (n < 1) return 0;

  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      total += i;
    }
  }

  return total;
}
total = 1 + 3 + 5 = 9;
1 === 1;
2;
3;
4;
i = 5;
i = 6;
