function slidingWindowMax(nums, k) {
  let result = [];

  let queue = [];

  for (let right = 0, left = 1 - k; right < nums.length; right++, left++) {
    while (queue.length && nums[right] > queue[queue.length - 1]) queue.pop();
    queue.push(nums[right]);

    if (left < 0) continue;

    result.push(queue[0]);

    if (nums[left] === queue[0]) queue.shift();
  }
  return result;
}

/*
use a monotonic queue, keeping track of the max in a separate queue in descending order

do an iteration, right = 0, left = 1 - k; right > nums.length; right++, left++;
while there is something in the queue and the current el (nums[right]) is greater than the end of the queue, pop off the queue,
push element into queue (now it'll be in order)

if (left < 0) continue; this means the window hasn't started yet.

result.push(q[0])

if the biggest element, q[0] is the same as the end of the window, then you remove it from the queue, cuz it's no longer the biggest in the window 

*/


console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3));
