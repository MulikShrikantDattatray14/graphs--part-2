// Test the function
// const grid = [
//   [1, 0, 1],
//   [1, 1, 0],
//   [1, 0, 0],
// ];
const grid = [
  [0, 0, 0],
  [0, 1, 0],
  [1, 0, 1]
];
const ans = nearest(grid);
for (let i = 0; i < ans.length; i++) {
  for (let j = 0; j < ans[i].length; j++) {
    process.stdout.write(ans[i][j] + " ");
  }
  console.log();
}
function nearest(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const vis = new Array(n);
  for (let i = 0; i < n; i++) {
    vis[i] = new Array(m).fill(0);
  }
  const dist = new Array(n);
  for (let i = 0; i < n; i++) {
    dist[i] = new Array(m).fill(0);
  }
  const q = new Queue();

  // Traverse the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // Start BFS if cell contains 1
      if (grid[i][j] === 1) {
        q.enqueue({ row: i, col: j, steps: 0 });
        vis[i][j] = 1;
      } else {
        // Mark unvisited
        vis[i][j] = 0;
      }
    }
  }

  const delrow = [-1, 0, +1, 0];
  const delcol = [0, +1, 0, -1];

  // Traverse until the queue becomes empty
  while (q.getLength() > 0) {
    const { row, col, steps } = q.dequeue();
    dist[row][col] = steps;

    // For all 4 neighbors
    for (let i = 0; i < 4; i++) {
      const nrow = row + delrow[i];
      const ncol = col + delcol[i];

      // Check for valid unvisited cell
      if (
        nrow >= 0 &&
        nrow < n &&
        ncol >= 0 &&
        ncol < m &&
        vis[nrow][ncol] === 0
      ) {
        vis[nrow][ncol] = 1;
        q.enqueue({ row: nrow, col: ncol, steps: steps + 1 });
      }
    }
  }

  // Return distance matrix
  return dist;
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
