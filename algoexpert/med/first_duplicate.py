"""
====================================
SUBOPTIMAL
====================================
TIME: O(N)
SPACE: O(N) - Using a set to track seen
"""


def firstDuplicateValue(array):
    seen = set()
    for i in array:
		if i in seen:
			return i
		seen.add(i)

	return -1


"""
====================================
OPTIMAL
====================================

TIME: O(N)
SPACE: O(1) 

[2, 1, 5, 2, 3, 3, 4]
	-1 -5       -3

"""
def firstDuplicateValue(array):
    for num in array:
        absVal = abs(num)
        if array[absVal-1] < 0:
            return absVal
        array[absVal-1] *= -1
    return -1



