/* 
======================
Using 1 stack approach
======================

keep adding characters to the stack, 
if the character you're on is a closing bracket, then you need to decode it.
    keep popping off the stack as long as it is not a "[" 
    and adding it to the decodedString array

    once it breaks out of the loop, you know you've reached the "[", so pop that off.
    create a number called k, keep popping off the top of the stack as long as it is a number, and adding it to the k.

    while k times
        push the decodedString into the top of the stack

else 
    just push the char in

create an array, pushing all of the stack in, all of the characters are in reverse order, so need to reverse the array and then join it

*/

var decodeString = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let decodedString = [];
      while (stack[stack.length - 1] !== "[") {
        decodedString.push(stack.pop());
      }
      let base = 1;
      let k = 0;
      stack.pop();
      while (!isNaN(stack[stack.length - 1])) {
        k += parseInt(stack.pop()) * base;
        base *= 10;
      }

      while (k--) {
        for (let j = decodedString.length - 1; j >= 0; j--) {
          stack.push(decodedString[j]);
        }
      }
    } else {
      stack.push(s[i]);
    }
  }

  let result = [];
  for (let i = stack.length - 1; i >= 0; i--) {
    result.push(stack.pop());
  }

  return result.reverse().join("");
};




/* 
======================
Using 1 stack approach
======================

if it's not a closing bracket, keep adding it to the stack and skip the rest of the logic

create two string variables to keep track = 
str
num

keep popping off the stack and adding it to STR until you hit a open bracket 

keep popping off the stack and adding it to NUM until you hit a Non Number

pushing curr into stack,
push str.repeat(Number(NUM)) into stack, join all of the stacks

*/



function decodeStringOneStack(s) {
  let stack = [];

  for (let char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    let cur = stack.pop();
    let str = "";
    while (cur !== "[") {
      str = cur + str;
      cur = stack.pop();
    }

    cur = stack.pop();
    let num = "";
    while (!isNaN(cur)) {
      num = cur + num;
      cur = stack.pop();
    }

    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join("");
}
