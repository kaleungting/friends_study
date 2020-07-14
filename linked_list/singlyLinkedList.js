class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head && !this.tail) return undefined;
    let popped = this.tail;
    let current = this.head;

    while (current.next) {
      if (current.next === this.tail) {
        this.tail = current;
        current.next = null;
      } else {
        current = current.next;
      }
    }

    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    let shifted = this.head;
    this.head = this.head.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return shifted;
  }

  unshift(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let current = this.head;
    let i = 0;
    while (idx < this.length) {
      if (idx === i) {
        return current;
      } else {
        current = current.next;
      }
      i++;
    }
  }

  set(val, idx) {
    if (!this.get(idx)) {
      return false;
    } else {
      this.get(idx).value = val;
      return true;
    }
  }

  insert(val, idx) {
    if (idx < 0 || idx > this.length) return false;
    let node = new Node(val);

    if (idx === 0) {
      //if inserting to the beginning
      this.unshift(val);
      return true;
    }
    if (idx === this.length) {
      //if inserting to end of the list
      this.push(val);
      return true;
    }
    let prev = this.get(idx - 1);
    let next = this.get(idx);
    prev.next = node;
    node.next = next;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let prev = this.get(idx - 1);
    let removed = prev.next;
    prev.next = prev.next.next;
    this.length--;
    return removed;
  }

  reverse() {
    let prev = null; //keep track of prev
    let curr = this.head; //keep track of current
    this.head = this.tail; //swap the head
    this.tail = curr; //set tail = to the head
    while (curr) {
      //while we advance curr
      let next = curr.next; //find the next
      curr.next = prev; //set the next of the current, to equal to prev (reassigning pointer)
      prev = curr; //advance prev pointer (reassign to curr)
      curr = next; //advance the curr pointer
    }
    return this.head;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let linkedList = new SinglyLinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);

console.log(linkedList.reverse());

// let prev = null; //keep track of prev
// let curr = this.head; //keep track of current
// this.head = this.tail; //swap the head
// this.tail = curr; //set tail = to the head
// while (curr) {
//   //while we advance curr
//   let next = curr.next; //find the next
//   curr.next = prev; //set the next of the current, to equal to prev (reassigning pointer)
//   prev = curr; //advance prev pointer (reassign to curr)
//   curr = next; //advance the curr pointer
// }
// //null <- 13 <- 27 -> 32 -> 71 -> null
// //        p     c
// //              p     c     n

// return this.head;
