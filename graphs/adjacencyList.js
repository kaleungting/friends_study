class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(ver1, ver2) {
    this.adjacencyList[ver1].push(ver2);
    this.adjacencyList[ver2].push(ver1);
  }

  removeEdge(ver1, ver2) {
    let idx1 = this.adjacencyList[ver1].indexOf(ver2);
    let idx2 = this.adjacencyList[ver2].indexOf(ver1);

    this.adjacencyList[ver1].splice(idx1, 1);
    this.adjacencyList[ver2].splice(idx2, 1);
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v1) => this.removeEdge(vertex, v1));
    delete this.adjacencyList[vertex];
  }

  dfsRecur(start) {
    let result = [];
    let visited = {};
    let that = this;
    function dfsHelper(ver) {
      if (!ver) return null;
      visited[ver] = true;
      result.push(ver);
      that.adjacencyList[ver].forEach((v) => {
        if (!visited[v]) dfsHelper(v);
      });
    }

    dfsHelper(start);
    return result;
  }

  dfsItr(start) {
    let stack = [start];
    let list = [];
    let visited = {};

    while (stack.length) {
      let popped = stack.pop();
      if (!visited[popped]) {
        list.push(popped);
        visited[popped] = true;
        this.adjacencyList[popped].forEach((node) => {
          stack.push(node);
        });
      }
    }
    return list;
  }

  bfs(start) {
    let queue = [start];
    let result = [];
    let visited = {};

    while (queue.length) {
      let node = queue.shift();
      if (!visited[node]) {
        result.push(node);
        visited[node] = true;

        this.adjacencyList[node].forEach((neighbor) => queue.push(neighbor));
      }
    }
    return result;
  }
}

// let flights = {
//   Tokyo: ["Dallas"],
// Dallas: ["Tokyo", "Aspen"],
//   Aspen: ["Dallas"],
// };
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.dfsRecur("A"));
console.log(g.dfsItr("A"));
console.log(g.bfs("A"));
