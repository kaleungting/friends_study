/*pseudocode
    edge case: if n is 0 return 1, if n < 0 you want to return the same answer but with 1/(res)

    once you figure out halfway of the solution, you no longer need to keep incrementing one to go up, you can just do, do itself x 2 times
    (x^n)^2 === x^2N
    so if you find the halfway point of n, then result is simply, replugging itself in with A*A, which is (x^2)^halfway point. to get the full. and 
*/

var myPow = function (x, n) {
  if (n === 0) return 1;

  let pow = Math.abs(n);
  let half = Math.floor(pow / 2);
  let result = pow % 2 === 0 ? myPow(x * x, half) : myPow(x * x, half) * x;

  return n < 0 ? 1 / result : result;
};

/*
Time Complexity: O(logn) - everytime we jump into the formula, n is halved
Space Complexity: O(logn) - we store the result for each time we compute, which is O(logn) times
*/
