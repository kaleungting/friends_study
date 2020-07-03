//to find leftchild 2N+1
//to find rightchild 2N+2
//to find parent Math.floor((n-1)/2)

class maxHeap {
  constructor() {
    this.values = [69, 4, 20, 1, 3, 2, 6];
  }

  insert(val) {
    this.values.push(val);

    let idx = this.values.length - 1;

    while (true) {
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

    while (true) {
      let leftChildIdx = followIdx * 2 + 1;
      let rightChildIdx = leftChildIdx + 1;
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
// max.insert(55)
max.extractMax();
console.log(max.values);

//12, 33, 67
