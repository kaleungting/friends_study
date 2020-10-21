/*
624. Maximum Distance in Arrays

You are given m arrays, where each array is sorted in ascending order. Now you can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a - b|. Your task is to find the maximum distance. 

Example 1:

Input: arrays = [[1,2,3],[4,5],[1,2,3]]
Output: 4
Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
Example 2:

Input: arrays = [[1],[1]]
Output: 0
Example 3:

Input: arrays = [[1],[2]]
Output: 1
Example 4:

Input: arrays = [[1,4],[0,5]]
Output: 4
*/

var maxDistance = function (arrays) {
  let result = 0,
    MIN = arrays[0][0],
    MAX = arrays[0][arrays[0].length - 1];

  for (let i = 1; i < arrays.length; i++) {
    let current = arrays[i];

    result = Math.max( //compare result with the max distance you can possibly get from this current iteration
      result, 
      Math.max(
        Math.abs(current[current.length - 1] - MIN), //current's max - total MIN
        Math.abs(current[0] - MAX) //current min vs total MAX
      )
    );
    MAX = Math.max(MAX, current[current.length - 1]); //replace max if current max is bigger
    MIN = Math.min(MIN, current[0]); //replace min if current min is smaller
  }
  return result;
};

/*
psuedocode
create a maxDistance = 0, this will be returned and also used to compare at each step
set MIN and MAX to the first elements of the array
since the subarrays are already sorted, it's easy to just key into the 0th element and the Nth-1 element

at every iteration, you want to compare 
current's max - MIN
MAX - current's min

and then compare that with the maxDistance
res = Math.max( compare res vs the MAX of (Math.abs(max-current's[0]) or Math.abs(current's[n-1] - min value))

compare the min and max with the current iterations min and max


return res
*/
