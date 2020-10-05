/* pseudocode
    - create a hashtable
    - iterate through nums, and check to see if the complement of the target-nums[i] already exist, if it does then return it
    - set hash[nums[i]] equal to its index

*/

var twoSum = function (nums, target) {

    //create a hash table to store key/val of numbers and their index
  let hash = {};

  for (let i = 0; i < nums.length; i++) { //O(N)
      //check to see if there exists a key val pair of complementary, if it does then return the pair
    if (hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]], i];
    }
    hash[nums[i]] = i;
  }
};


/*
Time Complexity: O(N) At worst instance, the pair is not found until the end of the array

Space Complexity; O(N) At worst instance, you need to create an object as big as the length of the array
*/