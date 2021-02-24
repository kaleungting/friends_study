def spiralTraverse(array):
    leftCol = 0
    rightCol = len(array[0])-1
    topRow = 0
    botRow = len(array)-1

    result = []

    while topRow <= botRow and leftCol <= rightCol:
        for i in range(leftCol, rightCol+1):
            result.append(array[topRow][i])
        topRow += 1

        for i in range(topRow, botRow+1):
            result.append(array[i][rightCol])
        rightCol -= 1

        if topRow <= botRow:  # if top row goes over bot then don't run this, doesn't count it the second time around
            for i in range(rightCol, leftCol-1, -1):
                result.append(array[botRow][i])
            botRow -= 1

        if leftCol <= rightCol:  # if left col goes over right rol dont count it
            for i in range(botRow, topRow-1, -1):
                result.append(array[i][leftCol])
            leftCol += 1

    return result


"""
TIME O(N)
SPACE O(N)

Just remember that there's a chance you would have counted the number from the first go around so if there's one remaining row or column, you dont want to count that
[[1,2,3]] - after going left to right one time, you dont wanna go right to left or else you'll end up with [1,2,3,2]
[[1],[2],[3]]

"""

print(spiralTraverse([[1], [2], [3]]))
