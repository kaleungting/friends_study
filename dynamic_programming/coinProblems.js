function changePossibilities(amountLeft, denominations) {
  // Calculate the number of ways to make change

  let combinations = new Array(amountLeft + 1).fill(0);
  combinations[0] = 1;

  for (let coin of denominations) {
    for (let i = 1; i < combinations.length; i++) {
      if (i >= coin) {
        combinations[i] += combinations[i - coin];
      }
    }
  }

  return combinations[amountLeft];
}

console.log(changePossibilities(4, [1, 2, 3]));

function fewestChangeUsed(amount, denominations) {
  let combinations = new Array(amount + 1).fill(11);
  combinations[0] = 0;

  for (let coin of denominations) {
    for (let i = 1; i < combinations.length; i++) {
      if (i >= coin) {
        combinations[i] = Math.min(combinations[i - coin] + 1, combinations[i]);
      }
    }
  }
  return combinations[amount];
}

console.log(fewestChangeUsed(10, [1, 2, 5]));
