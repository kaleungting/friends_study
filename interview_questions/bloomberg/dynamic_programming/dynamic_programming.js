/* fibonacci

pseudocode

- if N is less than 2, just return N
check to see if memo[N] has already been computed, if it has, just return the value
else, set memo[N] equal to fib(N-1,memo) + fib(N-2, memo)

return memo[N]
*/

function fib(N) {
  if (N < 2) return N;
  let memo = new Array(N + 1);

  memo[0] = 0;
  memo[1] = 1;

  for (let i = 2; i <= N; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[N];
}




