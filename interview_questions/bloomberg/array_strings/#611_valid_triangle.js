/*
=============================================================================
pseudocode
=============================================================================

Greedy Approach
3 pointers
it's important to know that if it's sorted a <= b <= c, a triangle is valid if (a + b > c)

you sort the array in descending order, and keep a pointer at C, that's the number you have to add up to be bigger than
then you keep a pointer at B = 1+C and another one to A= nums.length-1, 
if the sum of those pointers is greater than the pointer at C, everything in between is valid and you add it to the counter (a - b), the number of combos in between
because it's greater than C, you can increment the B pointer, (making the sum smaller)
if the sum is STILL bigger than the C, then add those in and increment B
if the sum of A+B is no longer bigger than C, then you decrement A
basically, you keep closing the window until A>B crosses path and once that's over, you start a new window with C incremented 
*/
function triangleNumber(nums) {
  nums.sort((a, b) => b - a);

  let counter = 0;
  for (let c = 0; c < nums.length - 2; c++) {
    let a = nums.length - 1,
      b = c + 1;
    while (a > b) {
      if (nums[a] + nums[b] > nums[c]) {
        counter += a - b;
        b++;
      } else {
        a--;
      }
    }
  }
  return counter;
}

/*
psuedocode
 
if the array is sorted, then you only have to check if a + b > c is true, because c + a > b and c + b > a
iterate through array, with pointer at i, stopping two values before length of the array,
    k = i+2; (two values in front of i)
    iterate through j, which is i + 1, (the next value in front of i), stopping 1 value before length of arr, and arr[i] !== 0, because what if arr[i] is zero, then you wont count it and just move on to next i.
        iterate k to the end of the array, and check if nums[i] + nums[j] > nums[k], incrementing k,
            when this loop is over, that means you've either reached the end of the array, or the sides is no longer valid, when this happens, you find the count by subtracting how much you've moved in the array (k-j), and then -1 since it is the length and we're looking at indices. add the count to counter

*/

function validTriangle(nums) {
  nums = nums.sort((a, b) => a - b);

  let counter = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < nums.length - 1 && nums[i] !== 0; j++) {
      while (k < nums.length && nums[i] + nums[j] > nums[k]) {
        k++;
      }
      counter += k - j - 1;
    }
  }

  return counter;
}
