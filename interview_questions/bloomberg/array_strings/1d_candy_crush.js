/* pseudocode
    create stack to store, chars and their freq
    iterate through the string
    if you're at the beginning (stack is empty) or if the top of the stack is different than current char
        push into stack the [char, 1]
    else
        take top of the stack, change the frequency to [char, += 1]

    if the frequency of the top of the stack is greater than 3, and the next char is not going to be same as current char
        pop off the stack

    create newStr
    iterate thru the stack, adding chars to the string, some chars might have freq higher than 1, so need to loop thru that
    return newStr
*/

function stringCrush(str) {
  stack = [];

  //iterate through the string
  for (let i = 0; i < str.length; i++) {
    //
    //if the stack is empty, or if the current character is not the same as the character at the top of the stack, that means it's unique
    if (stack.length === 0 || str[i] !== stack[stack.length - 1][0]) {
      stack.push([str[i], 1]); //push the character into the stack with the value of it being 1,
    } else {
      stack[stack.length - 1][1] += 1; //else, you've seen this character right before, and you increment the count of what you have seen so far
    }
    if (stack[stack.length - 1][1] >= 3 && str[i] !== str[i + 1]) {
      stack.pop(); //if the top of the stack, has frequency of 3 or more, and the next letter is not the same as this current letter, you know you've finished looking and to pop
    }
  }
  let newStr = ""; //now all that's remaining are the characters that have not been crushed, just iterate through the loop and add to newStr
  for (let i = 0; i < stack.length; i++) {
    while (stack[i][1]--) {
      //for characters with 2 freq, you need to add the char twice
      newStr += stack[i][0];
    }
  }
  return newStr; //return str
}

// [
//   [a, 1],
//   [b, 1],
// ];
// console.log(stringCrush("aaabbbc")); //c
// console.log(stringCrush("cd")); //cd
// console.log(stringCrush("baaabbbabbccccd")); //==> abbd
// console.log(stringCrush(""));
// console.log(stringCrush("bbbbbbb"));
// console.log(stringCrush("acd"));
// console.log(stringCrush("ccddccdcaacccaccddcdcddd"));

/*
Time Complexity - O(N) - the length of the str at most
Space Complexity - O(N), at most returning the same string

*/

console.log(candyCrush("aaabbbc")); // "c"
console.log(candyCrush("aabbbacd")); // "cd"
console.log(candyCrush("aabbccddeeedcba")); // ""
console.log(candyCrush("aaabbbacd")); //"acd"
console.log(candyCrush("aaaaawefbbbffaasbtrcd")); //"weaasbtrcd". Covers greedy approach

/*
create a stack that keeps track of char and freq
iterate through string
  take a look at the last char

*/

function candyCrush(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1][0] === s[i]) {
      let freq = stack[stack.length - 1][1] + 1;
      stack.pop();
      stack.push([s[i], freq]);
      if (freq >= 3 && s[i + 1] !== stack[stack.length - 1][0]) {
        stack.pop();
      }
    } else {
      stack.push([s[i], 1]);
    }
  }
  let word = "";
  for (let i = 0; i < stack.length; i++) {
    word += stack[i][0].repeat(stack[i][1]);
  }
  return word;
}

console.log(candyCrush("aaabbbc")); // "c"
console.log(candyCrush("aabbbacd")); // "cd"
console.log(candyCrush("aabbccddeeedcba")); // ""
console.log(candyCrush("aaabbbacd")); //"acd"
console.log(candyCrush("aaaaawefbbbffaasbtrcd")); //"weaasbtrcd". Covers greedy approach
