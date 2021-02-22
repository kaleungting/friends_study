"""
Time: O(N) - elements of the array
Space: O(D) - stacks of the recursion
"""


def productSum(array, level=1):
    total = 0
    for el in array:
        if type(el) is list:  # if element is an array, you call the sum    
            total += productSum(el, level+1)
        else:
            total += el
    return total * level
