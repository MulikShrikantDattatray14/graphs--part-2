const adj = [
  [1, 2, 3],
  [0, 2],
  [0, 1, 3],
  [0, 2],
]; //false// adjaceny list

// const adj = [
//   [1, 3],
//   [0, 2],
//   [1, 3],
//   [0, 2],
// ]; //true

const ans = isBipartite(adj.length, adj);
let final = ans ? "true" : "false";
console.log(final);

function isBipartite(V, adj) {
  const color = new Array(V).fill(-1);
  let color_0_1=0;

  for (let i = 0; i < V; i++) {
    if (color[i] === -1) {
      if (!dfs(i, color_0_1, color, adj)) return false;
    }
  }

  return true;
}

function dfs(node, color_0_1, color, adj) {
  color[node] = color_0_1;

  for (let i = 0; i < adj[node].length; i++) {
    const it = adj[node][i];
    if (color[it] === -1) {
      if (!dfs(it, 1 - color_0_1, color, adj)) return false;
    } else if (color[it] === color_0_1) {
      return false;
    }
  }

  return true;
}

//NOTE :

//converting matrix to list :

// const adj = [
//     [1, 1, 0, 0],
//     [1, 1, 0, 0],
//     [0, 0, 1, 1],
//     [0, 0, 1, 1]
// ];
// const adjLs = [];
// for (let i = 0; i < adj.length; i++) {
//     adjLs.push([]);
//     for (let j = 0; j < adj[i].length; j++) {
//         if (adj[i][j] == 1) {
//             adjLs[i].push(j + 1);
//         }
//     }
// }
