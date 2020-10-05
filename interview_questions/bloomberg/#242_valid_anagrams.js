/* pseudocode
    Create an Array with length of 26 and fill with 0. 
    Loop over first string and increment the buckets at their respective char position, ++
    Loop over second string and decrement the buckets at their respective char position --

    Loop over bucket to make sure all of the values are 0, and if it isn't return false; 
    return true
*/

function isValidAnagrams(s, t) {
  if (s.length !== t.length) return false;
  let bucket = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    bucket[s[i].charCodeAt(0) - 97]++;
  }
  for (let i = 0; i < t.length; i++) {
    bucket[t[i].charCodeAt(0) - 97]--;
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] !== 0) return false;
  }
  return true;
}

/*
Time Complexity: O(N) - it should be the length of the longer string, but asymptotic complexity disregards that

Space Complexity: O(1) - Space is 1 because array of 26 length is constant
*/

console.log(isValidAnagrams("cat", "act"));
console.log(isValidAnagrams("catty", "tact"));
