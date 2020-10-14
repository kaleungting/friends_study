/*66. Plus One
Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Example 3:

Input: digits = [0]
Output: [1]
*/

var plusOne = function (digits) {
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      digits[i] += 1;
    }
    digits[i] += carry;

    if (digits[i] >= 10) {
      carry = 1;
      digits[i] %= 10;
    } else {
      carry = 0;
    }
  }

  if (carry > 0) {
    digits.unshift(carry);
  }
  return digits;
};

/*
psuedocode

iterate through the array starting from the back
let carry = 0;

if i === digits.length-1 add 1;

digits[i] += carry;

if digits[i] is greater or equal to 10,
    then carry = 1
    digits[i] %= 10
else 
    carry = 0;

if carry > 0 
    digits.unshift(carry)
    
return digits

[9,0,0]

i = 0
digits[i] 9
carry = 1


*/
