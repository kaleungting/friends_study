/*216. Combination Sum III

Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.
Example 3:

Input: k = 4, n = 1
Output: []
Explanation: There are no valid combinations. [1,2,1] is not valid because 1 is used twice.
Example 4:

Input: k = 3, n = 2
Output: []
Explanation: There are no valid combinations.
*/

function combinationSum3(k, n) {
  let results = [];
  let combo = [];

  function backtrack(num, numsLeft, remain, combo) {
    if (numsLeft < 0 || remain < 0) return;

    if (numsLeft === 0 && remain === 0) {
      results.push([...combo]);
      return;
    }

    for (let i = num; i < 9 + 1; i++) {
      combo.push(i);
      backtrack(i + 1, numsLeft - 1, remain - i, combo); //increment the call by 1, decrement the numbers used(k) by 1, subtract remaining total by i (n-i)
      combo.pop();
    }
  }
  backtrack(1, k, n, combo);

  return results;
}

console.log(combinationSum3(3, 7));

/*

use a helper function called backtrack to add remaining numbers


create a results array
call backtrack(1,k,n,combo)
return results


helper backtrack(start, k, n, combo)
basecase - if k < 0 || n < 0 (meaning if we used up more than K amount of numbers or if the combination of numbers exceed our target)

if (k == 0 && n == 0) results.push(combo) 

iterate from where i = start to the rest of the digits 9+1
    combo.push(i)
    backtrack(i+1, k - 1, n - i, combo);
    combo.pop() - this is the backtracking part, the recursive call above goes deeper and deeper, but u need to backtrack to try a different combo


*/
