# Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

# You must write an algorithm with O(log n) runtime complexity.

"""
list = [1,3,5,6]
target = 5
return 2

list = [1,3,5,6]
[1,3,5,6]
 L
 R
target = 2 
return 1

return L + 1

L = 0
R = length of the array - 1
mid = L + (R-L)//2
if target = mid then return mid
if target is smaller than mid, then look to the left side
if target is greater than mid, then look to the right side



"""

def search_and_insert(nums, target):
    l, r = 0,len(nums)-1
    
    while l <= r:
        m = l + (r - l) //2
        if nums[m] == target:
            return m
        elif target < nums[m]:
            r = m - 1
        else:
            l = m + 1
    
    return l