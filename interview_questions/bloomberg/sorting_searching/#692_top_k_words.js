/*
===================
pseudocode
===================

Use a tracker to create a hashtable with words as keys and frequency as values
set an array equal to the hashtable sorted
  sort the keys of the tracker, based on 
    countCompare = tracker[b] - tracker[a] ===> descending order based on frequency

    if countCompare === 0, which means they are the same, then you want to return the a.localeCompare(b) ==> sorts alphabetically
    else 
      return countCompare ===> sorts numerically 
    
  return the result sliced from 0 to k

*/

function topKFrequent(words, k) {
  let tracker = {};
  for (let word of words) {
    tracker[word] = (tracker[word] || 0) + 1;
  }

  let result = Object.keys(tracker).sort((a, b) => {
    let countCompare = tracker[b] - tracker[a];
    if (countCompare === 0) {
      return a.localeCompare(b);
    } else {
      return countCompare;
    }
  });

  return result.slice(0, k);
}

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
