/*Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
*/

function lengthOfLongestSubstring(s) {
  let l = 0,
    tracker = {},
    maxCount = 0,
    count = 0;

  for (let r = 0; r < s.length; r++) {
    let letter = s[r];

    if (tracker[letter] && tracker[letter] >= l) {
      l = tracker[letter] + 1;
      count = r - tracker[letter];
    } else {
      maxCount = Math.max(maxCount, ++count);
    }

    tracker[letter] = r;
  }
  return maxCount;
}


/*
pseudocode

  sliding window problem
  create a tracker that keeps track of index at where the character was last seen
  create a maxCount and a current count

  iterate through the right window, 
    check the current letter
    if it is in the tracker already, then that's a character you've seen before, and if the index of where that letter is located is greater or equal to the left window,
      then replace the left pointer, to the index just AFTER where the letter was last found (tracker[letter] + 1)
      count will then be replaced by the difference from r (where the new letter is, minus the old location of the letter) - this count represents the amount of letters that have passed by in between duplicate characters
        i.e. "b a c d e a" 
              0 1 2 3 4 5
              count = 5 - 1 = 4, the 4 letters that have passed by since the last time we encountered a
    else 
      it's a character that you have never seen before, so you just increment the count 
      and compare the currentCount with maxCount and replace it if it's bigger
    add the letter to the tracker, and have it point to the index

  return maxCount
    
*/

/*
Time Complexity: O(N) iterate through the string once

Space Complexity: O(N) the tracker will have as many as chars of the string

*/