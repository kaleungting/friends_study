var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);

  dp[0] = 0;

  for (let i = 0; i < dp.length; i++) {
    for (let c of coins) {
      if (c <= i) {
        let prev = dp[i - c];
        dp[i] = Math.min(dp[i], prev + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};
