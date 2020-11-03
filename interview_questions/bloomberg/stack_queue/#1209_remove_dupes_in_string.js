/* 1209. Remove All Adjacent Duplicates in String II
Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

 

Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
Example 3:

Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps" */

function removeDuplicates(s, k) {
  const stack = [];

  for (let char of s) {
    if (stack.length && stack[stack.length - 1][0] === char) {
      stack[stack.length - 1][1] += 1;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([char, 1]);
    }
  }

  let str = "";
  for (let [char, count] of stack) {
    str += char.repeat(count);
  }

  return str;
}

/*
use stack to keep track of char and frequency
iterate through string
    if (the top of the stack, which basically means last seen char, is the same as the current char){
        increase the count of the char
        if the count reaches k, then you know you dont want it when you reconstruct it, so pop it off
    } else {
        you haven't seen this char last, and you want to add it to the stack with a count of 1
    }


*/
