let edges = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [3, 7],
  [7, 5],
  [8, 2],
  [8, 9],
  [9, 10],
  [9, 8],
];//true
// let edges = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [4, 5],
//   [5, 6],
//   [7, 5],
//   [3, 7],
//   [8, 2],
//   [8, 9],
//   [9, 10],
// ]; //false
const V = 11;
const adj = [];
for (let i = 0; i < V; i++) {
  adj.push([]);
}
for (const [u, v] of edges) {
  adj[u].push(v);
}

const ans = isCyclic(V, adj);
if (ans) {
  console.log("True");
} else {
  console.log("False");
}
// Function to detect cycle in a directed graph.
function isCyclic(V, adj) {
  const vis = new Array(V).fill(0);
  const pathVis = new Array(V).fill(0);

  for (let i = 0; i < V; i++) {
    if (vis[i] === 0) {
      if (dfsCheck(i, adj, vis, pathVis) === true) {
        return true;
      }
    }
  }
  return false;
}
function dfsCheck(node, adj, vis, pathVis) {
  vis[node] = 1;
  pathVis[node] = 1;

  // traverse for adjacent nodes
  for (let i = 0; i < adj[node].length; i++) {
    const it = adj[node][i];

    // when the node is not visited
    if (vis[it] === 0) {
      if (dfsCheck(it, adj, vis, pathVis) === true) {
        return true;
      }
    }
    // if the node has been previously visited
    // but it has to be visited on the same path
    else if (vis[it] == 1 && pathVis[it] === 1) {
      return true;
    }
  }
  // while returning back from each convert 1 to 0
  pathVis[node] = 0;
  return false;
}
