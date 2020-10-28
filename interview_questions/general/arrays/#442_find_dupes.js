var findDuplicates = function (nums) {
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      results.push(Math.abs(nums[i]));
    }

    nums[index] *= -1;
  }

  return results;
};

/*

it's important to know that the value of the elements will never exceed the size of the array

why does that matter and how can we use this to solve the problem?

use the value of the element as indices, INDEX is basically (nums[i] - 1)

the idea is to iterate through the array, and flip the nums[index] to a negative number. if you key into the index and it is already a negative number, then you know it's a number you've seen before, so you can just add it to the result

the key is to use Math.abs for the index

}


/*
brute force
create a hashmap to track freq and then add to result array if freq = 2
return result array
*/
