"""88. Merge Sorted Array
Easy

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 
Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
"""

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        p3 = len(nums1)-1
        p1, p2 = m-1, n-1
        
        for i in range(len(nums1) -1, -1,-1):
            val1 = nums1[p1] if p1 >= 0 else float(-inf)
            val2 = nums2[p2] if p2 >= 0 else float(-inf)
            if val1 > val2:
                nums1[i] = val1
                p1 -= 1
            else:
                nums1[i] = val2
                p2 -= 1
    
        return nums1
        
        """
        
        have three pointers
        p3 will point to numbers to replace
        
        p2 will point to last index of nums2
        p1 will poitn to last index of nums1
        
        while p1 p2: while they are not 0
        you want to compare the value at the pointers,
        replace p3 with whichever greater, then move the pointer
        
        
        """