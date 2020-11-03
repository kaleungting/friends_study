/* 78. Subsets
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
] 

================================================
optimal solution using BACKTRACKING
================================================
pseudocode
using index of the nums to push into the combo, 
explore the path, and increment i since you dont want to recount the one you just explored
pop off

*/
var subsets = function (nums) {
  let results = [];
  function backtrack(start, combo) {
    results.push([...combo]);

    for (let i = start; i < nums.length; i++) {
      combo.push(nums[i]);
      backtrack(i + 1, combo);
      combo.pop();
    }
  }

  backtrack(0, []);
  return results;
};

/* pseudocode
2^N elements
[1,2,3]
first start of with empty set
start branching with the first element  [], [1],[1,2],[1,2,3],[1,3]
    -keep adding to the end, add it to subset,
    -then backtrack by popping to see if there were unvisited sets
then come back to empty [], branch second element [2],[2,3]
then come back to empty [], branch third element [3]

*/

function subsets(nums) {
  let result = [[]];

  function backtrack(index, current) {
    //we iterate over indexes from index to the length of nums
    for (let i = index; i < nums.length; i++) {
      //push in new element into the current array
      current.push(nums[i]);
      //destructuring will clone the current, and pushes it into the result array
      result.push([...current]);
      //generate all other subsets for the current subset, move starting point by one to avoid dupes in results and to advance pointer
      backtrack(i + 1, current);
      //pop off values already added
      current.pop();
    }
  }
  backtrack(0, []);
  return result;
}

console.log(subsets([1, 2, 3]));

//current [1,2]
