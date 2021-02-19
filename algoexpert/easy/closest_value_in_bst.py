"""
====================================
SUB-OPTIMAL SOLUTION
====================================
uses a stack to iterate through the tree and does check value

Time: O(N)
Space: O(N)

"""


def findClosestValueInBstSub(tree, target):
    closest = float("inf")

    stack = [tree]

    while len(stack):
        node = stack.pop()
        if abs(node.value-target) < abs(closest-target):
            closest = node.value
        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)

    return closest


"""
====================================
OPTIMAL SOLUTION
====================================
uses a currentNode to iterate through the tree, no need to use a stack 

Time: O(log(n))
Space: O(1)

"""


def findClosestValueInBstOpt(tree, target):  # OPTIMAL
    currentNode = tree
    closest = float("inf")
    while currentNode is not None:
        if (abs(target-closest) > abs(target-currentNode.value)):
            closest = currentNode.value
        if target > currentNode.value:
            currentNode = currentNode.right
        elif target < currentNode.value:
            currentNode = currentNode.left
        else:
            return currentNode.value

    return closest
