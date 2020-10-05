var lengthOfLongestSubstring = function (s) {
  let count = 0,
    longest = 0,
    l = 0;

  let tracker = {};

  for (let r = 0; r < s.length; r++) {
    let letter = s[r]; //t
    if (tracker[letter] !== undefined && tracker[letter] >= l) {
      l = tracker[letter] + 1; //l:2
      count = r - tracker[letter]; //1
    } else {
      longest = Math.max(longest, (count += 1)); //count: 2, longest: 2
    }
    tracker[letter] = r; //t:0, m:2,z:3,u:4,x:5,
  }
  return longest;
};
