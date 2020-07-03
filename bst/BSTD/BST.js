class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return this.root;
    }

    let current = this.root;

    while (true) {
      if (node.value === current.value) return undefined;
      if (node.value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;
          return this;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;
          return this;
        }
      }
    }
  }

  search(val) {
    if (this.root === null) return null;
    if (this.root.value === val) {
      return true;
    } else {
      let current = this.root;
      while (current) {
        if (val > current.value) {
          current = current.right;
        } else if (val < current.value) {
          current = current.left;
        } else {
          return current;
        }
      }
    }
    return undefined;
  }

  bfs() {
    let queue = [this.root];
    let visited = [];
    while (queue.length) {
      let node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  dfsPreOrder() {
    let stack = [];
    let current = this.root;

    function dfsHelper(node) {
      stack.push(node.value);
      if (node.left) dfsHelper(node.left);
      if (node.right) dfsHelper(node.right);
    }
    dfsHelper(current);
    return stack;
  }

  dfsPostOrder() {
    let stack = [];
    let current = this.root;

    function dfsHelper(node) {
      if (node.left) dfsHelper(node.left);
      if (node.right) dfsHelper(node.right);
      stack.push(node.value);
    }
    dfsHelper(current);
    return stack;
  }

  dfsInOrder() {
    let stack = [];
    let current = this.root;

    function dfsHelper(node) {
      if (node.left) dfsHelper(node.left);
      stack.push(node.value);
      if (node.right) dfsHelper(node.right);
    }
    dfsHelper(current);
    return stack;
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

let tree = new Tree();
tree.insert(13);
tree.insert(9);
tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.insert(15);
tree.insert(17);

console.log(tree.dfs());
