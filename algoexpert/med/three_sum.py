def threeNumberSum(array, targetSum):
    results = []
    array.sort()
    for i in range(len(array)):
        left = i + 1
        right = len(array)-1
        diff = targetSum - array[i]
        while left < right:
            if (array[left] + array[right]) == diff:
                results.append([array[i], array[left], array[right]])
                left += 1
                right -= 1
            elif (array[left] + array[right]) < diff:
                left += 1
            else:
                right -= 1

    return results


"""
TIME: O(N^2)
SPACE: O(N)
"""
