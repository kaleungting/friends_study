/*
bruteforce - produce all substrings and then check each of them to see if palindrome
Time complexity: O(n^3)

if 
starting and ending are the same letter, and everything in between is a palindrome, then this is a palindrome
     a bcb a
    [s]   [e]
i) s[start] = s[end]
ii) if non boundary substring is palindrome
^^ this will only apply to length > 3
*/

function longestPalindrome(s) {
  let longest = "";

  function expandCenter(str, l, r) {
    while (l >= 0 && r < str.length && str[l] === str[r]) { 
        //as long as the left and right pointer are in bounds
        //and the two characters at the end equal to each other
      l--; //keep expanding out left and right
      r++;
    }
    return str.slice(l + 1, r); //return the largest palindromic substring that starts from that center
  }

  for (let i = 0; i < s.length; i++){
      const current1 = expandCenter(s, i, i); //accounts for palindrome with 1 center 'aba' 
      const current2 = expandCenter(s, i, i + 1); //accounts for palindrome with a double center 'abba'

      const longer = current1.length > current2.length ? current1 : current2; //compare length and replace whichever is longer
      if (longer.length > longest.length) longest = longer;
  }
  return longest;
}
