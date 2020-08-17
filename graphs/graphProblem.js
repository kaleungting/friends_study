// // 4.1 Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
// // route between two nodes.

// function routeBetweenNodes(n1, n2) {
//   let stack = [n1];

//   while (stack.length) {
//     let node = stack.pop();
//     if (node === n2) return true;
//     stack.push(...node.children);
//   }
//   return false;
// }

// function routeBetweenNodesRecur(n1, n2) {
//   function dfs(node) {
//     if (!node) return;
//     if (node === n2) return true;
//     for (let child in node.children) {
//       dfs(child);
//     }
//   }
//   dfs(n1);
//   return false;
// }

// // 4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm
// // to create a binary search tree with minimal height.

// // class Node {
// //   constructor(val) {
// //     this.value = val;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }

// function createBST(array) {
//   if (!array.length) return;
//   const middle = array[Math.floor(array.length / 2)];
//   const rootNode = new Node(middle);

//   rootNode.left = createBST(array.slice(0, Math.floor(array.length / 2)));
//   rootNode.right = createBST(array.slice(Math.floor(array.length / 2) + 1));

//   return rootNode;
// }

// // console.log(createBST([1, 2, 3, 4, 5, 6, 7]));

// // 4.3 List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
// // at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(value) {
//     let node = new Node(value);

//     if (!this.head && !this.tail) {
//       this.head = node;
//       this.tail = this.head;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.length += 1;
//     return this;
//   }
// }

// function listOfDepths(root) {
//   let result = {};

//   let node = { node: root, depth: 0 };
//   let queue = [node];
//   while (queue.length) {
//     let { node, depth } = queue.shift();
//     if (!result[depth]) result[depth] = new SinglyLinkedList();
//     result[depth].push(node.value);
//     if (node.left) queue.push({ node: node.left, depth: depth + 1 });
//     if (node.right) queue.push({ node: node.right, depth: depth + 1 });
//   }
//   return result;
// }

// // 4.4 Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
// // this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
// // node never differ by more than one.

// function checkBTree(root) {
//   if (!root.left && !root.right) return false;

//   let node = { node: root, depth: 0 };

//   let stack = [node];

//   let depths = [];
//   while (stack.length) {
//     let { node, depth } = stack.pop();

//     if (!node.left && !node.right) {
//       depths.push(depth);
//     }
//     if (node.left) stack.push({ node: node.left, depth: depth + 1 });
//     if (node.right) stack.push({ node: node.right, depth: depth + 1 });
//   }

//   depths = depths.sort((a, b) => a - b);
//   return Math.abs(depths[0] - depths[depths.length - 1]) <= 1;
// }

// //4.5 Validate BST: Implement a function to check if a binary tree is a binary search tree.
// var isValidBST = function (root) {
//   let upperBound = Infinity;
//   let lowerBound = -Infinity;
//   let stack = [{ node: root, upperBound, lowerBound }];

//   while (stack.length) {
//     let { node, upperBound, lowerBound } = stack.pop();
//     if (!node) continue;
//     if (node.val <= lowerBound || node.val >= upperBound) return false;

//     if (node.left)
//       stack.push({ node: node.left, upperBound: node.val, lowerBound });
//     if (node.right)
//       stack.push({ node: node.right, upperBound, lowerBound: node.val });
//   }
//   return true;
// };

// //4.6 Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a
// //binary search tree. You may assume that each node has a link to its parent.

// export function findSuccessor(node) {
//   if (!node) throw Error("node cannot be null");

//   if (node.right) {
//     //if there is a right subtree, look at right subtree and traverse to the leftest value
//     node = node.right;
//     while (node.left) node = node.left;
//     return node.value;
//   } else if (node.parent) {
//     //if no right subtree, and there's a parent
//     if (node.parent.value > node.value) {
//       //if parent is greater, than node return parent
//       return node.parent.value;
//     } else {
//       //traverse up parent until you reach a parent who's value is greater than node
//       let parent = node.parent;
//       while (parent) {
//         if (parent.value > node.value) return parent.value;
//         parent = parent.parent;
//       }
//     }
//   }
// }

// 4.7 Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of
// projects, where the second project is dependent on the first project). All of a project's dependencies
// must be built before the project is. Find a build order that will allow the projects to be built. If there
// is no valid build order, return an error.

let projects = ["d", "a", "b", "c", "e", "f"];
let dependencies = [
  ["a", "d"],
  ["f", "b"],
  ["b", "d"],
  ["f", "a"],
  ["d", "c"],
];

function buildOrder(projects, dependencies) {
  const adjList = {},
    result = new Set();

  // create adjacency list
  projects.forEach((project) => (adjList[project] = []));
  // project     // dependent
  dependencies.forEach((edge) => adjList[edge[0]].push(edge[1]));

  // run topological sort
  projects.forEach((project) => topologicalSort(project, adjList, result));

  return [...result].reverse();
}

function topologicalSort(project, adjList, result, path = new Set()) {
  if (!result.has(project)) {
    path.add(project);

    for (const dependent of adjList[project]) {
      if (path.has(dependent)) return -1;
      topologicalSort(dependent, adjList, result, path);
    }

    path.delete(project);
    result.add(project);
  }
}

console.log(buildOrder(projects, dependencies));

// 4.8 First Common Ancestor: Design an algorithm and write code to find the first common ancestor
// of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
// necessarily a binary search tree.

function getDepth(node, depth = 0) {
  return node.parent ? getDepth(node.parent, depth + 1) : depth;
}

function findingCommonAncestor(n1, n2) {
  if (!n1 || !n2) return null;

  const depth1 = getDepth(n1),
    depth2 = getDepth(n2);

  let depthDiff = Math.abs(depth1 - depth2),
    deeper = depth1 > depth2 ? n1 : n2,
    shallower = n1 === deeper ? n2 : n1;

  while (depthDiff--) {
    deeper = deeper.parent;
  }

  while (deeper) {
    if (deeper === shallower) return deeper.value;
    deeper = deeper.parent;
    shallower = shallower.parent;
  }

  return null;
}

function convertToAdjList(adjMatrix) {
  return adjMatrix.map((a) =>
    a.map((v, i) => (v ? i : -1)).filter((v) => v !== -1)
  );
}

var testMatrix = [
  [0, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
];

console.log(convertToAdjList(testMatrix));
