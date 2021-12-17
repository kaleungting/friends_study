'''
350. Intersection of Two Arrays II
Easy

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
'''

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        
        nums1, nums2 = sorted(nums1), sorted(nums2)
        p1 = p2 = 0
        result = []
        
        while p1 < len(nums1) and p2 < len(nums2):
            if nums1[p1] < nums2[p2]:
                p1 += 1
            elif nums2[p2] < nums1[p1]:
                p2 += 1
            else:
                result.append(nums1[p1])
                p1 += 1
                p2 += 1
        
        return result

    def intersect_ii(self, nums1: List[int], nums2: List[int]) -> List[int]:
    
        count = collections.Counter(nums1)
        result = []

        for num in nums2:
            if count[num] > 0:
                result.append(num)
                count[num] -= 1
        
        return result
        