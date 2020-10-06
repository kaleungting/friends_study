/* pseudocode 

bruteForce - create a tracker to keep track of chars and their freq, O(N)
iterate through, turn that into an 2d array, sort it by 2nd el (freq) O(N), O(NlogN);
create a newStr, 
iterate through 2d array, and do a while loop based on the freq to add chars to the string O(N)
    time complexity: O(NLogN)
    space complexity: O(N)
*/
var frequencySort = function (s) {
  let tracker = {};

  for (let i = 0; i < s.length; i++) {
    tracker[s[i]] = tracker[s[i]] ? tracker[s[i]] + 1 : 1;
  }
  let array = [];
  for (let [k, v] of Object.entries(tracker)) {
    array.push([k, v]);
  }
  array = array.sort((a, b) => b[1] - a[1]);

  let newStr = "";

  for (let i of array) {
    newStr += i[0].repeat(i[1]);
  }
  return newStr;
};

// console.log(frequencySort("helloooo"));

/*pseudocode

optimized solution:
create a tracker that keeps track of chars and their freq, find the max value and create an array with the length of the max val and fill it with [].
create newStr
loop through tracker, and at value, key into array and push k in. and then iterate through array from the back and another for loop through the array, and do newStr += the freq*str

Time Complexity: O(N), using index of the Array as the Frequency
Space Complexity: O(N)
*/

function freqSortOptimized(s) {
  let tracker = {};
  for (let i = 0; i < s.length; i++) {
    tracker[s[i]] = tracker[s[i]] ? tracker[s[i]] + 1 : 1;
  }

  let length = Math.max(...Object.values(tracker));
  let buckets = new Array(length + 1).fill(null);

  for (let [k, v] of Object.entries(tracker)) {
    if (!buckets[v]) {
      buckets[v] = [];
    }
    buckets[v].push(k);
  }

  let newStr = "";
  for (let i = buckets.length; i >= 0; i--) {
    if (buckets[i]) {
      for (let char of buckets[i]) {
        newStr += char.repeat(i);
      }
    }
  }
  return newStr;
}

console.log(freqSortOptimized("helloooo"));
