// function findLongestSubSum(arr, sum) {
//   let left = 0,
//     right = 0;
//   let res = [-1];
//   let currSum = 0;
//   while (right < arr.length) {
//     while (currSum < sum) {
//       currSum += arr[right];
//       right++;
//     }
//     if (currSum === sum) {
//       res =
//         res.length === 1
//           ? [left, right]
//           : res[1] - res[0] > right - left
//           ? res
//           : [left, right];
//     }

//     currSum += arr[right++];
//     if (currSum > sum) {
//       currSum -= arr[left];
//       left++;
//     }
//   }

//   return res;
// }

function findLongestSubSum(arr, sum) {
  let left = 0,
    right = 0;
  let res = [-1];
  let currSum = 0;
  while (right < arr.length) {
    currSum += arr[right];

    while (currSum > sum && left < right) {
      currSum -= arr[left];
      left++;
    }

    // if (currSum === sum && (res.length === 1 || res[1] - res[0] < right - left)){
    //     res = [left+1, right+1]
    // }
    if (currSum === sum) {
      res =
        res.length === 1
          ? [left + 1, right + 1]
          : res[1] - res[0] > right - left
          ? res
          : [left + 1, right + 1];
    }

    right++;
  }

  return res;
}

console.log(findLongestSubSum([1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9], 15));
// 15 + 6 = 21
// [1,2,3,4,5,0,0,0,6,7,8,9]
//      ^             ^

// console.log(findLongestSubSum([1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9], 15));
// // 15 + 6 = 21
// // [1,2,3,4,5,0,0,0,6,7,8,9]
// //      ^             ^

function rotateMatrix(arr) {
  let N = arr.length;
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N / 2; j++) {
      [arr[i][j], arr[i][N - 1 - j]] = [arr[i][N - 1 - j], arr[i][j]];
    }
  }
  return arr;
}

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

