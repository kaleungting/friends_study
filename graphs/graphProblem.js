// Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
// route between two nodes.

function routeBetweenNodes(n1, n2) {
  let stack = [n1];

  while (stack.length) {
    let node = stack.pop();
    if (node === n2) return true;
    stack.push(...node.children);
  }
  return false;
}

function routeBetweenNodesRecur(n1, n2) {
  function dfs(node) {
    if (!node) return;
    if (node === n2) return true;
    for (let child in node.children) {
      dfs(child);
    }
  }
  dfs(n1);
  return false;
}

// 4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm
// to create a binary search tree with minimal height.

// class Node {
//   constructor(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
//   }
// }

function createBST(array) {
  if (!array.length) return;
  const middle = array[Math.floor(array.length / 2)];
  const rootNode = new Node(middle);

  rootNode.left = createBST(array.slice(0, Math.floor(array.length / 2)));
  rootNode.right = createBST(array.slice(Math.floor(array.length / 2) + 1));

  return rootNode;
}

console.log(createBST([1, 2, 3, 4, 5, 6, 7]));

// 4.3 List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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
}

function listOfDepths(root) {
  let result = {};

  let node = { node: root, depth: 0 };
  let queue = [node];
  while (queue.length) {
    let { node, depth } = queue.shift();
    if (!result[depth]) result[depth] = new SinglyLinkedList();
    result[depth].push(node.value);
    if (node.left) queue.push({ node: node.left, depth: depth + 1 });
    if (node.right) queue.push({ node: node.right, depth: depth + 1 });
  }
  return result;
}

// 4.4 Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
// this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
// node never differ by more than one.

