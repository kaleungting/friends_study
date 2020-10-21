var flatten = function (root) {
  let arr = [];

  function preOrder(root) {
    if (!root) return null;

    arr.push(root);
    if (root.left !== null) preOrder(root.left);
    if (root.right !== null) preOrder(root.right);
  }

  preOrder(root);
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].left = null;
    arr[i].right = arr[i + 1];
  }
  return root;
};
