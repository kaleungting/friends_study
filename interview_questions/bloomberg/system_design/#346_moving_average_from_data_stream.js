/*346. Moving Average from Data Stream
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Example:

MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
*/

class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.total = 0;
  }

  next(val) {
    this.queue.push(val);
    if (this.queue.length > this.size) {
      this.total -= this.queue.shift();
    }

    this.total += val;
    return this.total / this.queue.length;
  }
}


/*
possible data structures
array as a queue - shift, push values - shift takes a long time though O(N)



*/
