def invertBinaryTreeIter(tree):
	queue = [tree]
	while len(queue):
		node = queue.pop()

		node.left, node.right = node.right, node.left
		if node.left:
			queue.append(node.left)
		if node.right:
			queue.append(node.right)

	return tree


def invertBinaryTreeRecur(tree):
    if tree is None:
		return
	tree.right, tree.left = tree.left, tree.right
	invertBinaryTree(tree.right)
	invertBinaryTree(tree.left)
	return tree
	

# This is the class of the input binary tree.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
