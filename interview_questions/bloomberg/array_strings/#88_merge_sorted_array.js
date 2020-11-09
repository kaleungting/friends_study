/* 88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6] */

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    let val1 = p1 >= 0 ? nums1[p1] : -Infinity;
    let val2 = p2 >= 0 ? nums2[p2] : -Infinity;
    if (val2 >= val1) {
      nums1[i] = nums2[p2];
      p2--;
    } else {
      nums1[i] = nums1[p1];
      p1--;
    }
  }
  return nums1;
};

/*
work backwards to replace the value

keep a pointer at nums1 and nums2
if p1 or p2 is used up, then the vals become -Infinity
compare val1 and val2
    and then replace the character





*/
