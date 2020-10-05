/* pseudocode
    - create stack to solve this problem,
    - iterate through the string, O(N)
    - use set to tracker what to delete
    - if it is an open parenthesis, put index into stack; 
    - if it is a closed parenthesis, and stack is empty, then you know it's invalid, so put it into tracker for deletion
    - if it is a closed paren, and the stack is not empty, then pop top of stack
    - if at the end of the stack, there is stuff remaining, those are the open paren that did not get closed, so add them to tracker O(N)
    - iterate through string once again, and check if i is in set, if it is, don't add to new string O(N)
*/

function minRemoveToMakeValid(s) {
  let stack = [];
  let tracker = new Set();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    }

    if (s[i] === ")") {
      if (stack.length === 0) {
        tracker.add(i);
      } else {
        stack.pop();
      }
    }
  }

  for (let i = 0; i < stack.length; i++) {
    tracker.add(stack[i]);
  }
  console.log(tracker);

  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (!tracker.has(i)) {
      newStr += s[i];
    }
  }
  return newStr;
}

// console.log(minRemoveToMakeValid("lee(t(c)o)de)"));

/*
Time Complexity: O(N) - three separate iterations, at most each through the length of the string. 
    It is important to use Set to optimize lookup time in the solution.

Space Complexity: O(N) - the object will be the length of the string N
*/

/* pseudocode
    the algo is, run two passes, first pass remove ")" by checking if it is a ")" when the balance is 0, if it is, then continue and don't add
    keep track of # openParen as you make the first pass, you will then find the difference between balance and total openParen.
    second iteration, if you hit an openParen, then you decrement the amt to keep, and if the amt to keep dips below 0, then you know you don't need to add this "(" and you continue
*/
function minRemoveToMakeValid2(s) {
  let firstPass = [];
  let balance = 0;
  let openParen = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      balance++;
      openParen++;
    }

    if (s[i] === ")") {
      if (balance === 0) {
        continue;
      } else {
        balance--;
      }
    }
    firstPass.push(s[i]);
  }

  let result = [];
  let openKeep = openParen - balance;

  for (let char of firstPass) {
    if (char === "(") {
      openKeep--;
      if (openKeep < 0) continue;
    }
    result.push(char);
  }
  return result.join("");
}

console.log(minRemoveToMakeValid2("(a(b(c)d)"));
/*
Time Complexity O(N) - 3 loops to the length of N
Space Complexity O(N) - 2 arrays to store the characters


*/
