function arrayReduce(array, iteratee, initAccum) {
  var index = -1,
    length = array.length,
    accumulator = initAccum;
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index]);
  }
  return accumulator;
}

console.log(
  arrayReduce(
    [7, 2, 4],
    function (a, b) {
      return a + b;
    },
    0
  )
);
// returns 13, 7 + 2 + 4

var input = [];
for (var i = 0; i < 10000; i++) {
  input.push(i % 2 == 0 ? [i] : [i, i]);
}
var result = arrayReduce(
  input,
  function (a, b) {
    return a.concat(b);
  },
  []
);

console.log(result);

/* returns [0,1,1,2,3,3,4,5,5]
is there something bad with the code above?
    - not sure what it's doing with the odd values and why we want double of them
    - takes up a lot of space because you're creating so many arrays
*/