/* pseudocode

    use a bucket to track frequency

    sort the array at each bucket

    push the words into new array


*/
function topKFrequent(words, k) {
  let tracker = {};
  for (let i = 0; i < words.length; i++) {
    tracker[words[i]] = tracker[words[i]] ? tracker[words[i]] + 1 : 1;
  }

  let buckets = new Array(Math.max(...Object.values(tracker)) + 1).fill(null);

  for (let [k, v] of Object.entries(tracker)) {
    if (!buckets[v]) {
      buckets[v] = [];
    }

    buckets[v].push(k);
  }

  let result = [];

  let counter = 0;
  let i = buckets.length - 1;

  while (counter < k) {
    if (buckets[i]) {
    //   buckets[i] = buckets[i].sort();
      for (let words of buckets[i]) {
        result.push(words);
        counter++;
        if (counter === k) break;
      }
    }
    i--;
  }
  return result;
}
let words = [
    "the",
    "day",
    "is",
    "sunny",
    "the",
    "the",
    "the",
    "sunny",
    "is",
    "is",
  ],
  k = 4;

console.log(topKFrequent(words, k));
