/* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack. 

*/

/*
create two stacks, one to keep track of the minimum so you can always get it at constant time
    if you push a value into the stack, you check to see if the minstack is empty or if it's smaller than the current smallest, if it is push into minstack

    if you pop, run a check to see if its the same as the currentMin, if it is, pop off from the minstack too

    now you'll have constant lookup time for both stacks

*/

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (
      this.minStack.length < 1 ||
      x <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(x);
    }
  }

  pop() {
    let removed = this.stack.pop();
    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return ele;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
