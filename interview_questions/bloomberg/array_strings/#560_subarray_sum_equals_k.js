/*
====================================================================
BETTER SOLUTION - easier to understand
====================================================================

you want to use a tracker to keep tracker of the sum at a certain point up to where you've iterated

as you iterate along, you increase the frequency of currSum by 1
  if currSum is equal to the target, you can just add the counter by 1

  if tracker - k is something we've seen before, then up until that point, we add the number of time we've seen that difference

  add currSum to tracker and increase it's freq


*/

var subarraySum = function (nums, k) {
  let tracker = {};
  let counter = 0;
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    if (currSum === k) {
      counter += 1;
    }

    if (tracker[currSum - k]) {
      counter += tracker[currSum - k];
    }

    tracker[currSum] = (tracker[currSum] || 0) + 1;
  }
  return counter;
};



var subarraySum = function (nums, k) {
  let count = 0,
    sum = 0;

  let map = { 0: 1 };

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map[sum - k]) {
      count += map[sum - k];
    }

    map[sum] = map[sum] ? map[sum] + 1 : 1;
  }
  return count; 
};

/*

use a hashmap to track

if the sum up to where you are minus K is an element you have seen before, then you increment the count by the frequency 

afterwards, increment the frequency or set a new key value pair with the freq of 1

create a count, and a running sum
a map with 0:1

iterate through nums
    increment sum by nums[i]
    
    if (map[sum-k]) exists, then add count by the frequency of map[sum-k]
    
    set map[sum] + 1 if it exists, or 1 if it doesn't exist

return count


[3,4,7,2,-3,1,4,2,1]
{(0,1),(3,1),(7,1),(14,2),(16,1),(13,1),(18,1),(20,1),}
count = 1, 2, 3, 
*/
