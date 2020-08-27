class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, weight) {
    this.values.push({ val, weight });

    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((val1, val2) => val1.weight - val2.weight);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  djikstrasAlgo(start, end) {
    const distances = {};
    let queue = new PriorityQueue();
    let prev = {};
    let result = [];
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, distances[vertex]);
      }
      prev[vertex] = null;
    }

    while (queue.values.length) {
      let smallest = queue.dequeue().val;

      if (smallest === end) {
        while (prev[smallest]) {
          result.push(smallest);
          smallest = prev[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest]) {
          let possibleRoute = distances[smallest] + neighbor.weight;
          if (possibleRoute < distances[neighbor.node]) {
            distances[neighbor.node] = possibleRoute;
            prev[neighbor.node] = smallest;
            queue.enqueue(neighbor.node, possibleRoute);
          }
        }
      }
    }
    console.log(distances);
    console.log(prev);
    return result.concat(start).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// console.log(graph.djikstrasAlgo("A", "E"));
console.log(graph);
