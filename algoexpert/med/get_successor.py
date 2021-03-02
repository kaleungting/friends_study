def findSuccessor(tree, node):
    if node.right is None:
        return getRightParent(node)

    return getLeftChild(node.right)


def getLeftChild(node):
    current = node
    while current.left is not None:
        current = current.left
    return current


def getRightParent(node):
    current = node
    while current.parent is not None and current.parent.right == current:
        current = current.parent
    return current.parent


"""
two rules

return node's left most right subtree
or 
return nodes's right most parent

"""
