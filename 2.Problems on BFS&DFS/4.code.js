// let B = [
//   [1, 2],
//   [1, 3],
// ];
// let A = 3; //0
//===============================
let B = [
  [1, 2],
  [2, 3],
  [4, 5],
  [5, 6],
  [6, 4],
  [7, 8],
];
let A = 8; //1
// create a adjacentcy list
const adjList = [];
for (let i = 0; i <= A; i++) {
  adjList.push([]);
}
function Queue() {
  var a = [],
    b = 0;
  this.getLength = function () {
    return a.length - b;
  };
  this.isEmpty = function () {
    return 0 == a.length;
  };
  this.enqueue = function (b) {
    a.push(b);
  };
  this.dequeue = function () {
    if (a.length === 0) return undefined;
    const c = a[b++];
    if (2 * b >= a.length) {
      a = a.slice(b);
      b = 0;
    }
    return c;
  };

  this.peek = function () {
    return 0 < a.length ? a[b] : void 0;
  };
}
for (let i = 0; i < B.length; i++) {
  // You need to set values for u and v based on your requirements
  let val = B[i];
  const u = val[0];
  const v = val[1];
  adjList[u].push(v);
  adjList[v].push(u); // dont include this line for directed graph
}
let ans = isCycle(A, adjList);
if (ans) {
  console.log("1");
} else {
  console.log("0");
}
function checkForCycle(adj, s, vis) {
  let q = new Queue();
  q.enqueue({ current: s, previous: -1 });
  vis[s] = true;
  while (q.getLength() > 0) {
    let { current: node, previous: par } = q.dequeue(); //remove 1st
    // Using a normal for loop instead of for...of
    for (let j = 0; j < adj[node].length; j++) {
      let it = adj[node][j];
      if (!vis[it]) {
        q.enqueue({ current: it, previous: node });
        vis[it] = true;
      } else if (vis[it] == true && par !== it) {
        //par !== it means someother element as already visited it
        return true;
      }
    }
  }
  return false;
}
function isCycle(V, adj) {
  let visited = new Array(V + 1).fill(false);
  // check foreach components in case of  multiple components
  for (let i = 1; i <= V; i++) {
    if (!visited[i]) {
      if (checkForCycle(adj, i, visited)) {
        return true;
      }
    }
  }
  return false;
}
