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

// console.log(findLongestSubSum([1, 2, 3, 4, 5, 0, 0, 0, 6, 7, 8, 9], 15));
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

// console.log(
//   rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

function findDupes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[Math.abs(arr[i]) - 1] < 0) {
      return Math.abs(arr[i]);
    } else {
      arr[Math.abs(arr[i]) - 1] = -arr[Math.abs(arr[i]) - 1];
    }
  }
  return -1;
}

// console.log(findDupes([1, 2, 4, 3, 4, 5]));

function sortedSquareArray(arr) {
  let newArr = new Array(arr.length).fill(0);
  let left = 0,
    right = arr.length - 1,
    end = newArr.length - 1;

  while (left <= right) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      newArr[end] = arr[left] ** 2;
      left++;
      end--;
    } else {
      newArr[end] = arr[right] ** 2;
      right--;
      end--;
    }
  }

  return newArr;
}

console.log(sortedSquareArray([-5, -4, -2, 1, 3]));

function findMissingNum(arr, n) {
  let sum = arr.reduce((acc, ele) => {
    return (acc += ele);
  }, 0);

  let totalSum = (n * (n + 1)) / 2;
  return totalSum - sum;
}

console.log(findMissingNum([1, 2, 3, 4, 5, 6], 7));

function pathSum(root, sum) {
  if (!root) return false;
  let runningSum = 0;

  function dfs(root, runningSum, sum) {
    let newRunningSum = root.val + runningSum;

    if (newRunningSum === sum) return true;

    dfs(root.left, newRunningSum, sum);
    dfs(root.right, newRunningSum, sum);
  }

  dfs(root, runningSum, sum);
  return false;
}

function pathSumStack(root, sum) {
  let stack = [{ node: root, csum: sum - root.val }];

  while (stack.length) {
    let { node, csum } = stack.pop();

    if (!node.left && !node.right && csum === 0) return true;

    if (node.left) stack.push({ node: node.left, csum: csum - node.left.val });
    if (node.right)
      stack.push({ node: node.right, csum: csum - node.right.val });
  }

  return false;
}

function oddEven(head) {
  let even = head.next;
  let odd = head;

  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}
