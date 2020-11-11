/* 62. Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there? */

const uniquePaths = (m, n) => {
  const dp = new Array(m).fill(0);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n).fill(1);
  }

  dp[0][0] = 1;

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
    }
  }

  return dp[m - 1][n - 1];
};

// [
//   [1, 1, 1, 1, 1, 1, 1]
//   [1, 2, 3, 4, 5, 6, 7],
//   [1, 3, 6, 10, 15, 21, 28],
// ]
