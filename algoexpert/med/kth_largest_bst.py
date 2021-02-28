class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class TreeInfo:
    def __init__(self, visited, prev):
        self.visited = visited
        self.prev = prev


def findKthLargestValueInBst(tree, k):
    treeInfo = TreeInfo(0, None)
    reverseOrderTraversal(tree, k, treeInfo)
    return treeInfo.prev


def reverseOrderTraversal(node, k, treeInfo):
    if node is None or treeInfo.visited == k:
        return

    reverseOrderTraversal(node.right, k, treeInfo)
    if treeInfo.visited < k:  # if we have visited K nodes already, then we don't want to run this
        treeInfo.visited += 1
        treeInfo.prev = node.value
        reverseOrderTraversal(node.left, k, treeInfo)
