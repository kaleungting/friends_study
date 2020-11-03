/* 
797. All Paths From Source to Target

Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]). */

var allPathsSourceTarget = function (graph) {
  let results = [];
  let path = [0];
  function backtrack(currNode, path) {
    if (currNode === graph.length - 1) {
      let copy = [...path];
      results.push(copy);
      return;
    }

    graph[currNode].forEach((neighbor) => {
      path.push(neighbor);
      backtrack(neighbor, path);
      path.pop();
    });
  }

  backtrack(0, path);
  return results;
};

/*
pseudocode
use backtrack to explore one path
need to make a deep copy or else it will change the original, 
basecase for the recursive call is, if you've reached the target then you just push the path into the results

go through the current Node's neighbors and add it to the path, backtrack it, and then pop it off

call backtrack function 


*/