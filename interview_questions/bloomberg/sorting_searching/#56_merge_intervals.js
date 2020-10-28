/* pseudocode


return [] if intervals is empty
sort intervals by starting time
create a result array, pushing in the first interval.

iterate through the intervals,
    - compare the startingTime, with the last intervals in the results array's ending time, if it is smaller, there is an overlap. 
        if there is an overlap, then you need to replace the last result array's ending Time, but we need to check to see if the current endingTime is bigger or smaller, can be resolved by using Math.max(between last's endingtime and current endingtime)
        else, there isn't an overlap, and you just push the current interval in the result array

return the results


*/

function mergeIntervals(intervals) {
  if (intervals.length < 1) return [];

  intervals = intervals.sort((a, b) => a[0] - b[0]);
  results = [intervals[0]];
  for (let i of intervals) {
    let last = results[results.length - 1];

    if (i[0] <= last[1]) {
      results[results.length - 1][1] = Math.max(i[1], last[1]);
    } else {
      results.push(i);
    }
  }

  return results;
}


/* 
Time Complexity: O(NlogN)to sorting the array and O(N) to iterate through the interval, so the total complexity is O(NlogN)

Space Complexity: worst case is O(N) if none of the intervals overlap
*/