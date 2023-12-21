// const adj = [
//   [1, 0, 1],
//   [0, 1, 0],
//   [1, 0, 1],
// ];//2

const adj = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];//3
const V = adj.length;
//lets create adjacnecy list
const adjLs = [];
for (let i = 0; i < V; i++) {
  adjLs.push([]);
}
// Convert adjacency matrix to adjacency list
for (let i = 0; i < V; i++) {
  for (let j = 0; j < V; j++) {
    // Self nodes are not considered
    if (adj[i][j] === 1 && i !== j) {
      adjLs[i].push(j);
      adjLs[j].push(i);
    }
  }
}
const vis = new Array(V).fill(0);
let cnt = 0;
for (let i = 0; i < V; i++) {
  // If the node is not visited
  if (vis[i] == 0) {
    // Counter to count the number of provinces
    cnt++;
    dfs(i, adjLs, vis);
  }
}
// dfs traversal function
function dfs(node, adj, vis) {
  // mark the node as visited
  vis[node] = 1;
  const neighbors = adj[node];
  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];
    if (vis[neighbor] == 0) {
      vis[neighbor] = 1;
      dfs(neighbor, adj, vis);
    }
  }
}
console.log(cnt);
