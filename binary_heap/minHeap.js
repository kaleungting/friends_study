class minHeap {
  constructor() {
    this.heap = [];
  }

  enqueue(node) {
    this.heap.push(node);

    let currentIdx = this.heap.length - 1;

    // console.log(this.heap);
    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      //   console.log(parentIdx);
      let currentPriority = this.heap[currentIdx].priority;
      let parentPriority = this.heap[parentIdx].priority;

      if (currentPriority < parentPriority) {
        [this.heap[parentIdx], this.heap[currentIdx]] = [
          this.heap[currentIdx],
          this.heap[parentIdx],
        ];
        currentIdx = parentIdx;
      } else {
        break;
      }
    }
    return this.heap;
  }

  dequeue() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];

    let removed = this.heap.pop();
    let currentIdx = 0;
    let length = this.heap.length - 1;
    while (true) {
      let leftChildIdx = 2 * currentIdx + 1;
      let rightChildIdx = 2 * currentIdx + 2;
      let swapIdx;

      if (leftChildIdx > length) break;
      if (rightChildIdx > length) break;

      if (
        this.heap[leftChildIdx].priority < this.heap[rightChildIdx].priority
      ) {
        swapIdx = leftChildIdx;
      } else {
        swapIdx = rightChildIdx;
      }

      if (this.heap[currentIdx].priority > this.heap[swapIdx].priority) {
        [this.heap[currentIdx], this.heap[swapIdx]] = [
          this.heap[swapIdx],
          this.heap[currentIdx],
        ];
        currentIdx = swapIdx;
      } else {
        break;
      }
    }

    return removed;
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

n1 = new Node("headache", 6);
n2 = new Node("gunshot", 1);
n3 = new Node("amputated leg", 2);
n4 = new Node("coronavirus testing", 3);
n5 = new Node("tweaked back from golf", 5);
n6 = new Node("arrow to the knee", 4);

heap = new minHeap();
heap.enqueue(n1);
heap.enqueue(n2);
heap.enqueue(n3);
heap.enqueue(n4);
heap.enqueue(n5);
heap.enqueue(n6);
heap.dequeue();
console.log(heap);
