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
