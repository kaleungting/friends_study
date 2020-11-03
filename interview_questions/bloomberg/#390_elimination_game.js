/* 390. Elimination Game
There is a list of sorted integers from 1 to n. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.

Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.

We keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Find the last number that remains starting with a list of length n.

Example:

Input:
n = 9,
1 2 3 4 5 6 7 8 9
2 4 6 8
2 6
6

Output:
6 */

var lastRemaining = function (n) {
  let left = true;
  let step = 1;
  let head = 1;
  let remaining = n;

  while (remaining > 1) {
    if (left || remaining % 2 === 1) { //if we are moving left to right or if the amt of remaining numbers is odd, then we need to adjust the head
      head = head + step;
    }

    remaining = Math.floor(remaining/2); //remaining numbers get reduced by half each time
    step *= 2; //every time we move in one direction, need to double
    left = !left; //left to right, right to left, and back and forth
  }

  return head;
};
