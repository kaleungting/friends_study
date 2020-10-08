//write a method that takes a number and use the Collatz conjecture to figure out how many steps it takes to turn into the number one
// Given a positive integer n, the task is to find whether this number reaches to 1 after performing following two operations:-

// If n is even, then n = n/2.
// If n is odd, then n = 3*n + 1.
// Repeat above steps, until it becomes 1.

function collatz(num) {
  let counter = 0;
  while (num > 1) {
    counter++;
    if (num % 2 === 0) {
      num = Math.floor(num / 2);
    } else {
      num = 3 * num + 1;
    }
  }
  return counter;
}

// console.log(collatz(12));

// 6, 3, 10, 5, 16, 8, 4, 2, 1;

function validateBST(root) {
  if (!root) return true;
  let stack = [{ node: root, upperBound: Infinity, lowerBound: -Infinity }];

  while (stack.length) {
    let { node, upperBound, lowerBound } = stack.pop();
    if (node.val >= upperBound || node.val <= lowerBound) {
      return false;
    }

    if (node.left)
      stack.push({ node: node.left, upperBound: node.val, lowerBound });
    if (node.right)
      stack.push({ node: node.right, upperBound, lowerBound: node.val });
  }

  return true;
}

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

function pairSums(arr, target) {
  let counter = 0;
  let map = {};
  for (let num of arr) {
    if (map[target - num]) {
      counter += 1;
      // console.log([num, target - num]);
    } else {
      map[num] = target - num;
    }
  }
  return counter;
}

//counter, that will increment
//map, if not seen before, then i'll set it's key to current value, and value to target - value
//map[target-val], then increment 1

// console.log(pairSums([1, 2, 3, 4, 5, 5, 6], 7));

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  let hash = {};

  for (let i = 0; i < s1.length; i++) {
    hash[s1[i]] = hash[s1[i]] ? (hash[s1[i]] += 1) : 1;
  }
  for (let i = 0; i < s1.length; i++) {
    if (hash[s2[i]]) {
      hash[s2[i]] = hash[s2[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(isAnagram("banana", "anabna"));

function lengthOfLongestSubstring(s) {
  let l = 0,
    longest = 0,
    length = 0; //keep track of left, longest, and the current length
  let tracker = {}; //have a tracker to keep track of indices
  for (let r = 0; r < s.length; r++) {
    //move the right window

    if (tracker[s[r]] !== undefined && tracker[s[r]] >= l) {
      //if you have encountered this letter before
      l = tracker[s[r]] + 1; //you reset the beginning length of the string to where it first started
      length = r - tracker[s[r]]; //and the length of the current string will then be the difference between the right index and the place last seen
    } else {
      longest = Math.max(longest, (length += 1)); //else, you continue to add +1 and see if it's the longest
    }
    tracker[s[r]] = r; //no matter what you replace the index of the letter
  }
  return longest;
}

function threeSum(nums) {
  nums = nums.sort((a, b) => a - b); //sort the array, so that you can find the high and low

  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      //if the array is starting at 0, and i is not the same as the previous number then we can run the check (we don't want to count duplicates)
      let high = nums.length - 1;
      let low = i + 1;
      let sum = 0 - nums[i];

      while (low < high) {
        //checking in between the range of the greater numbers
        if (nums[high] + nums[low] === sum) {
          //if they equal to sum, then we've found the other two pairs
          result.push([nums[i], nums[high], nums[low]]);
          while (low < high && nums[low] === nums[low + 1]) low++; //there might be duplicates, for example [-4,-1,-1,0,2], so we would just move the pointer if the next number is a dupe.
          while (low < high && nums[high] === nums[high - 1]) high--; //same as above, move the pointer if the number before is dupe
          low++; //increment the left pter
          high--; //decrement the right pointer
        } else if (nums[high] + nums[low] < sum) {
          low++; //then the sum is too low, so we need to move the left pointer
        } else {
          high--; //then the sum is too high, need to move the right pointer
        }
      }
    }
  }

  return result;
}

function balancedBST(arr) {
  if (arr.length === 0) return;
  let mid = Math.floor(arr.length / 2);

  let root = new Node(mid);
  root.left = balancedBST(arr.slice(0, mid));
  root.right = balancedBST(arr.slice(mid + 1));
  return root;
}

var compress = function (chars) {
  for (let i = 0; i < chars.length - 1; i++) {
    let counter = 1;
    let j = i;
    while (chars[j] === chars[j + 1]) {
      j++;
      counter++;
    }

    if (counter > 10) {
      chars[i + 1] = Math.floor(counter / 10).toString();
      chars[i + 2] = (counter % 10).toString();
      while (i + 1 < j) {
        chars[i + 2] = "";
        i++;
      }
    } else if (counter > 1) {
      chars[i + 1] = counter.toString();
      while (i + 1 < j) {
        chars[i + 2] = "";
        i++;
      }
    }

    i = j;
    // chars.splice(i, j);
  }
};

var reverseBetween = function (head, m, n) {
  let curr = head;
  let prev = null;
  while (m > 1) {
    //advance curr pointer until the point where you know you want to start reversing the linkedList
    prev = curr;
    curr = curr.next;
    m--;
    n--;
  }

  let connection = prev; //store connection as prev, this is where you want to connect the newly reversedLL to later on
  let tail = curr; //store tail as curr, this will eventually become the end of the list, you'll need it to attach the rest of the linkedList to
  while (n > 0) {
    //for n-times, reverse the linkedlist
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    n--;
  }

  if (connection !== undefined) {
    //if connection has a value, that means you can connect the point at which you've stopped with the new ll
    connection.next = prev;
  } else {
    head = prev; // it means you dont have any nodes in the beginning, and head is prev
  }

  tail.next = curr; //connect the tail with the rest of the nodes, where you left off (curr)
  return head;
};

/*
given N, you are only able to do these following two operations
  - multiply by 2
  - integer division by 3
  find min steps to generate N from 1
*/

/* pseudocode
while N is divisible by 2,
  N /= 2
  count++
if it isn't, then multiply 3
  N*= 3
  count++
until N reaches 1

return count
edge cases = N, -1 , then return 0
*/

function twoSteps(n) {
  let count = 0;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = Math.floor(n / 2);
      count++;
    } else {
      n *= 3;
      n += 1;
      count++;
    }
  }
  return count;
}

// console.log(twoSteps(3));

/*
10
5
1 * 2 * 2 * 2 *
10/2 = 5 * 3 = 15 * 
*/

function deeplyNestedParen(s) {
  let maxCount = 0;
  let maxChar;
  let currCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      currCount++;
    } else if (s[i] === ")") {
      currCount--;
    } else {
      if (currCount > maxCount) {
        maxCount = currCount;
        maxChar = s[i];
      }
    }
  }
  return [maxCount, maxChar];
}

console.log(deeplyNestedParen("((a)(((bc)))((((d)((f))))))")); // —> [‘f’]
console.log(deeplyNestedParen("(((X))(((Y))))")); // —> [‘f’]
/*

create stack
iterate through the string,
create an object, if it is a "(" add to stack, if it is ")" pop stack,
when it reaches a letter, add char:length of stack at the time, return char with the highest val
[]
*/

/*
Time Complexity: O(N)
Space Complexity: O(1)
*/

var decodeString = function (s) {
  let nums = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (nums.has(char)) {
      let times = parseInt(char);

      let j = i + 1;
      while (s[j] !== "]") {
        j++;
      }
      let newLetters = s.slice(i + 2, j);
      while (times--) {
        newStr += newLetters;
      }
      i = j;
    } else {
      newStr += char;
    }
  }
  return newStr;
};

console.log(decodeString("3[a]2[bc]"));
