/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. 

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/


/* pseudocode

create a dummy node so you can attach things.
create 3 pointers, one pointer to the dummy node to link nodes, one for l1 and one for l2
let carry = 0 to begin with.
while (p1 || p2), iterate through the lists while there are still nodes in either one
    get the val of the nodes at p1 and p2, if the node doesn't exist, then the value is 0
    add the two vals together with the carry (if there is one from the previous calculation)

    if the total value is greater than 10, then you need to keep the carry amount and set it to 1
        then value should be the remainder of the val/10 (essentially value %= 10)
    else, carry should be replaced to 0

    now that we have the total value, we can create a new ListNode with this val and attach it to the dummy using p3.next
    advance the p3 pointer 

    if p1 is a node and it exists, advance it, same goes for p2

if after you go through l1 and l2, and there's still a remaining carry, that means you can just create a newListNode out of it and add it to the end of dummy linkedList by p3.next

return dummy.next

*/

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);

  let p3 = dummy;
  let p1 = l1;
  let p2 = l2;
  let carry = 0;
  while (p1 || p2) {
    let val1 = p1 ? p1.val : 0;
    let val2 = p2 ? p2.val : 0;

    let value = val1 + val2 + carry;

    if (value >= 10) {
      carry = 1;
      value %= 10;
    } else {
      carry = 0;
    }
    p3.next = new ListNode(value);
    p3 = p3.next;

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }

  if (carry > 0) {
    p3.next = new ListNode(carry);
  }

  return dummy.next;
};


var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b) => a - b)
    for (let i = 0; i < nums.length; i++){
        if (i === 0 || (i > 0 && nums[i] !== nums[i-1])){
            let low = i + 1;
            let high = nums.length - 1;
            let diff = 0 - nums[i];

            while (low < high){
                if (nums[low] + nums[high] === diff){
                    res.push([nums[i],nums[low],nums[high]])
                    while (low < high && nums[low] === nums[low+1]) low++
                    while (low < high && nums[high] === nums[high-1]) high--
                    low++
                    high--
                } else if (nums[low] + nums[high] < diff){
                    low++
                } else {
                    high--
                }
            }
        }
    }
    return res
};

