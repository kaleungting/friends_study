
# Time: O(n)
# Space: O(1)
def twoNumberSum1(array, targetSum):
    seen = set()
    for num in array:
        comp = targetSum-num
        if comp in seen:
            return [num, comp]
        seen.add(num)
    return []


# Time: O(nlog(n))
# Space: O(1)
def twoNumberSum2(array, targetSum):
    array = sorted(array)
    left = 0
    right = len(array)-1

    while left < right:
        currentSum = array[left] + array[right]
        if currentSum == targetSum:
            return [array[left], array[right]]
        elif currentSum < targetSum:
            left += 1
        elif currentSum > targetSum:
            right -= 1

    return []
