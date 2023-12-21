// let B = [[1, 2]];
// let A = 2;//0
// let B = [[1, 2],[2,5],[2,6],[1,3],[3,4],[3,7],[7,8]];
//  let A = 8;//0

let B = [
  [1, 2],
  [2, 3],
  [4, 5],
  [5, 6],
  [4, 6],
  [7, 8],
];
let A = 8; //1
// Create an adjacency list
const adjList = [];
for (let i = 0; i <= A; i++) {
  adjList.push([]);
}

for (let i = 0; i < B.length; i++) {
  let val = B[i];
  const u = val[0];
  const v = val[1];
  adjList[u].push(v);
  adjList[v].push(u); // Don't include this line for a directed graph
}
const ans = isCycle(A, adjList);

if (ans) {
  console.log("1");
} else {
  console.log("0");
}

function dfs(node, parent, vis, adj) {
  vis[node] = 1;
  // Go to all adjacent nodes
  for (let i = 0; i < adj[node].length; i++) {
    const adjacentNode = adj[node][i];
    if (vis[adjacentNode] === 0) {
      if (dfs(adjacentNode, node, vis, adj)) {
        return true;
      }
    } else if (vis[adjacentNode] === 1 && adjacentNode !== parent) {
      return true;
    }
  }
  return false;
}

function isCycle(V, adj) {
  const vis = new Array(V + 1).fill(0);

  for (let i = 1; i <= V; i++) {
    if (vis[i] === 0) {
      if (dfs(i, -1, vis, adj)) {
        return true;
      }
    }
  }

  return false;
}
