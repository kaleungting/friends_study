class BinaryTree:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class TreeInfo:
    def __init__(self, isBalanced, height):
        self.isBalanced = isBalanced
        self.height = height


def heightBalancedBinaryTree(tree):
    treeInfo = getTreeInfo(tree)
    return treeInfo.isBalanced


def getTreeInfo(node):
    if node is None:
        return TreeInfo(True, 0)

    leftSubtree = getTreeInfo(node.left)
    rightSubtree = getTreeInfo(node.right)

    isBalanced = (leftSubtree.isBalanced and rightSubtree.isBalanced) and (
        abs(leftSubtree.height - rightSubtree.height) <= 1)

    height = max(leftSubtree.height, rightSubtree.height) + 1
    return TreeInfo(isBalanced, height)


"""
TIME- O(N)
SPACE - O(H) - height of tree for the call stacks

Use a recursive function that checks two things
    - if the left and right side of the tree is balanced
        - if it isn't then the current node is not balanced
    - if the difference between the height of the left and right subtrees are not greater than one
if those two things pass,
    then set the TreeInfo(isBalanced, height)
"""