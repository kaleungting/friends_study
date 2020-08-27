// function dijkstras(graph, source, end) {
//   let distances = {};
//   let unvisited = new Set(Object.keys(graph));
//   let previous = {};
//   let path = [];
//   for (let vertex in graph) {
//     distances[vertex] = Infinity;
//   }

//   distances[source] = 0;

//   while (unvisited.size > 0) {
//     let curr = getMinNode(unvisited, distances);
//     unvisited.delete(curr);

//     for (let neighbor in graph[curr]) {
//       let distanceToNeighbor = graph[curr][neighbor];
//       let totalDistance = distanceToNeighbor + distances[curr];

//       if (totalDistance < distances[neighbor]) {
//         distances[neighbor] = totalDistance;
//         previous[neighbor] = curr;
//       }
//     }
//   }

//   while (previous[end]) {
//     path.push(end);
//     end = previous[end];
//   }

//   return { distances, path: path.concat(source).reverse() };
// }

// function getMinNode(unvisited, distances) {
//   return Array.from(unvisited).reduce((minNode, node) =>
//     distances[minNode] > distances[node] ? node : minNode
//   );
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

//leetcode 787

// var findCheapestPrice = function (n, flights, src, dst, k) {
//   let flightGraph = {};
//   for (let flight of flights) {
//     let [from, to, price] = flight;
//     if (!flightGraph[from]) flightGraph[from] = {};
//     flightGraph[from][to] = price;
//   }
//   // console.log(flightGraph);
//   let i = 0;
//   let unvisited = new Set();
//   let distance = {};
//   let path = [];
//   while (i < n) {
//     unvisited.add(i);
//     distance[i] = [Infinity, 0];
//     i++;
//   }
//   let previous = {};
//   distance[src] = [0, 0];

//   while (unvisited.size > 0) {
//     let curr = getMinNode(unvisited, distance);
//     unvisited.delete(curr);
//     // if (curr === dst && k)
//     for (let neighbor in flightGraph[curr]) {
//       let distToN = flightGraph[curr][neighbor];
//       let totalDist = distance[curr][0] + distToN;
//       if (distance[neighbor][1] >= k + 1) break;
//       if (totalDist < distance[neighbor][0]) {
//         distance[neighbor][1] += 1;
//         distance[neighbor][0] = totalDist;
//         previous[neighbor] = curr;
//       }
//     }
//   }
//   let result = distance[dst][0] === Infinity ? -1 : distance[dst][0];
//   return result;
// };

// function getMinNode(unvisited, distance) {
//   return Array.from(unvisited).reduce((minNode, node) =>
//     distance[minNode] > distance[node] ? node : minNode
//   );
// }

var findCheapestPrice = function (n, flights, src, dst, K) {
  let flightHash = {};
  for (let flight of flights) {
    let [from, to, price] = flight;
    if (flightHash[from] == null) flightHash[from] = {};
    flightHash[from][to] = price;
  }

  let pq = [[0, 0, src]];

  while (pq.length != 0) {
    let [price, stop, from] = pq.shift();
    console.log({ price, stop, from });
    if (stop > K + 1) continue;
    if (from == dst) return price;
    let to = flightHash[from];
    for (let t in to) {
      let costToNext = price + to[t];
      pq.push([costToNext, stop + 1, t]);
      console.log(pq);
    }
    pq.sort((a, b) => a[0] - b[0]);
  }

  return -1;
};

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

function getPermutations(string) {
  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  let oldPermutations = getPermutations(allCharsExceptLast);
  let newPermutations = new Set();
  oldPermutations.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      let newPerm = perm.slice(0, i) + lastChar + perm.slice(i);
      newPermutations.add(newPerm);
    }
  });

  return newPermutations;
}

// console.log(getPermutations("cats"));
