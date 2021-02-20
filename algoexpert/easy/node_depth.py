"""
====================================
RECURSIVE
====================================

Time: O(N)
Space: O(N)

"""


def nodeDepthsRecur(root, depth=0):
    if root is None:
        return 0
    return depth + nodeDepthsRecur(root.left, depth + 1) + nodeDepthsRecur(root.right, depth + 1)


"""
====================================
ITERATIVE
====================================

Time: O(N)
Space: O(N)

"""


def nodeDepthsIter(root):
    depth = 0
    stack = [{"node": root, "currDepth": 0}]
    while len(stack):
        node, currDepth = stack.pop().values()

        depth += currDepth

        if node.left:
            stack.append({"node": node.left, "currDepth": currDepth+1})
        if node.right:
            stack.append({"node": node.right, "currDepth": currDepth+1})

    return depth
