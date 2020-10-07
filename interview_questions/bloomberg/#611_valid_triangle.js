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
