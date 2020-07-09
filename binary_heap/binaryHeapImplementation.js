//to find leftchild 2N+1
//to find rightchild 2N+2
//to find parent Math.floor((n-1)/2)

class maxHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    let idx = this.values.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentVal = this.values[parentIdx];
      if (parentVal < this.values[idx]) {
        [this.values[parentIdx], this.values[idx]] = [
          this.values[idx],
          this.values[parentIdx],
        ];
        idx = parentIdx;
      } else {
        break;
      }
    }
    return this.values;
  }

  extractMax() {
    this.swap(0, this.values.length - 1, this.values);

    const oldRoot = this.values.pop();

    let followIdx = 0;
    let length = this.values.length - 1;
    while (true) {
      let leftChildIdx = followIdx * 2 + 1;
      let rightChildIdx = leftChildIdx + 1;

      if (leftChildIdx > length) break;
      if (rightChildIdx > length) break;

      let whichChild =
        this.values[leftChildIdx] > this.values[rightChildIdx]
          ? leftChildIdx
          : rightChildIdx;
      if (this.values[followIdx] < this.values[whichChild]) {
        this.swap(followIdx, whichChild, this.values);
        followIdx = whichChild;
      } else {
        break;
      }
    }
    return oldRoot;
  }

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
}

let max = new maxHeap();
max.insert(2);
max.insert(7);
max.insert(4);
max.insert(1);
max.insert(8);
max.insert(1);

console.log(max.values);

// //12, 33, 67
// [2, 7, 4, 1, 8, 1];
