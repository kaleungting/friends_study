class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


class TreeInfo:
    def __init__(self, rootIdx):
        self.rootIdx = rootIdx
"""
SUBOPTIMAL

TIME O(n^2) - looping thru n nodes and call recursively on left and right
SPACE O(N)/O(h) - store at most height of nodes (recursive call stack) but the tree built is O(N)

def reconstructBst(values):
    if len(values) == 0:  # base case, where we finish adding and there's no value left in array
        return None

    rootVal = values[0]
    root = BST(rootVal)
    rightIdx = len(values)

    for i in range(1, len(values)):
        value = values[i]
        if value >= rootVal:  # find the next value in the array that's greater than root
            rightIdx = i  # this is the value for the right subtree
            break

    # everything to the left of this idx belongs to the left
    root.left = reconstructBst(values[1:rightIdx])
    # everything to the right of this idx belongs to the right
    root.right = reconstructBst(values[rightIdx:])

    return root

"""

"""
OPTIMAL - O(N) Time and Space

Using a global class variable TreeInfo
"""

def reconstructBst(preOrderTraversalValues):
    treeInfo = TreeInfo(0)
    return reconstructBstFromRange(float("-inf"), float("inf"), preOrderTraversalValues, treeInfo)


def reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentRootIdx):
    if currentRootIdx.rootIdx == len(preOrderTraversalValues):
        return None

    rootValue = preOrderTraversalValues[currentRootIdx.rootIdx]
    if rootValue < lowerBound or rootValue >= upperBound:
        return None

    currentRootIdx.rootIdx += 1
    leftSubTree = reconstructBstFromRange(
        lowerBound, rootValue, preOrderTraversalValues, currentRootIdx)
    rightSubTree = reconstructBstFromRange(
        rootValue, upperBound, preOrderTraversalValues, currentRootIdx)
    return BST(rootValue, leftSubTree, rightSubTree)
