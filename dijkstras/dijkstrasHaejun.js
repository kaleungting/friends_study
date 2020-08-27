// function dijkstras(graph, start, end) {
//   let distances = {};
//   let path = [];
//   for (let vertex in graph) {
//     distances[vertex] = Infinity;
//   }

//   distances[start] = 0;

//   let unvisited = new Set(Object.keys(graph));
//   let prev = {};

//   while (unvisited.size > 0) {
//     let curr = minDistance(unvisited, distances);
//     unvisited.delete(curr);

//     for (let neighbor in graph[curr]) {
//       //also graph[curr] to get the neighbors
//       let totalDistanceToNeighbor = graph[curr][neighbor]; //graph[curr][neighbor] to get the neighbor's distance
//       let totalDistance = distances[curr] + totalDistanceToNeighbor;

//       if (totalDistance < distances[neighbor]) {
//         distances[neighbor] = totalDistance;
//         prev[neighbor] = curr;
//       }
//     }
//   }

//   while (prev[end]) {
//     path.push(end);
//     end = prev[end];
//   }

//   return path;
// }

// function minDistance(vertices, distances) {
//   return Array.from(vertices).reduce((minV, ver) => {
//     if (distances[minV] > distances[ver]) {
//       return ver;
//     } else {
//       return minV;
//     }
//   });
// }

// let graph = {
//   a: { c: 1, b: 7 },
//   b: { a: 7, d: 12, e: 13 },
//   c: { a: 1, d: 20, f: 4 },
//   d: { b: 12, c: 20, e: 5 },
//   e: { b: 13, d: 5, f: 9 },
//   f: { c: 4, e: 9 },
// };

// console.log(dijkstras(graph, "a", "f"));

var findCheapestPrice = function (n, flights, src, dst, K) {
  let flightGraph = {};
  for (let flight of flights) {
    let [from, to, price] = flight;
    if (!flightGraph[from]) flightGraph[from] = {};
    flightGraph[from][to] = price;
  }

  let cost = {};

  for (let flight in flightGraph) {
    cost[flight] = Infinity;
  }
  cost[src] = 0;

  let unvisited = new Set(Object.keys(flightGraph));
  let prev = {};

  while (unvisited.size > 0) {
    let curr = minCost(unvisited, cost);
    unvisited.delete(curr);

    for (let neighbor in flightGraph[curr]) {
      let neighborCost = flightGraph[curr][neighbor];
      let totalCost = cost[curr] + neighborCost;

      if (totalCost < cost[neighbor]) {
        prev[neighbor] = curr;
        cost[neighbor] = totalCost;
      }
    }
  }

  console.log(cost);
};

function minCost(vertices, cost) {
  return Array.from(vertices).reduce((minCost, cCost) => {
    if (cost[minCost] > cost[cCost]) {
      return cCost;
    } else {
      return minCost;
    }
  });
}

console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    1
  )
);
