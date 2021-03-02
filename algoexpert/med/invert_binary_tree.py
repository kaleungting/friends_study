"""
TIME: O(N)
SPACE: O(N) = at most queue will hold a level of N/2 amount of nodes


"""


def invertBinaryTreeIter(tree):
    queue = [tree]
    while len(queue):
        node = queue.pop()

        node.left, node.right = node.right, node.left
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)


"""
TIME: O(N)
SPACE: O(D) or O(log(n)) =  HEIGHT of the tree (amount of callstacks)

"""


def invertBinaryTreeRecur(tree):
    if tree is None:
        return
    tree.right, tree.left = tree.left, tree.right
    invertBinaryTreeRecur(tree.right)
    invertBinaryTreeRecur(tree.left)
    return tree


# This is the class of the input binary tree.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
