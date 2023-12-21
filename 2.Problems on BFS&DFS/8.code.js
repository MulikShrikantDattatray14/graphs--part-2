// USING BFS
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

const grid = [
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
];
const ans = numberOfEnclaves(grid);
console.log(ans);
function numberOfEnclaves(grid) {
    const q = new Queue();
    const n = grid.length;
    const m = grid[0].length;
    const vis = new Array(n);
    for (let i = 0; i < n; i++) {
        vis[i] = new Array(m).fill(0);
    }
    // traverse boundary elements
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // first row, first col, last row, last col
            if (i === 0 || j === 0 || i === n - 1 || j === m - 1) {
                // if it is land, store it in the queue
                if (grid[i][j] === 1) {
                    q.enqueue([i, j]);
                    vis[i][j] = 1;
                }
            }
        }
    }
    const delrow = [-1, 0, +1, 0];
    const delcol = [0, +1, +0, -1];
    while (q.getLength() !== 0) {
        const [row, col] = q.dequeue();
        // traverses all 4 directions
        for (let i = 0; i < 4; i++) {
            const nrow = row + delrow[i];
            const ncol = col + delcol[i];
            // check for valid coordinates and for land cell
            if (
                nrow >= 0 &&
                nrow < n &&
                ncol >= 0 &&
                ncol < m &&
                vis[nrow][ncol] === 0 &&
                grid[nrow][ncol] === 1
            ) {
                q.enqueue([nrow, ncol]);
                vis[nrow][ncol] = 1;
            }
        }
    }
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // check for unvisited land cell
            if (grid[i][j] === 1 && vis[i][j] === 0) {
                // grid has value as 1 but not visited
                cnt++;
            }
        }
    }
    return cnt;
}



/// using DFS
// const grid = [
//   [0, 0, 0, 0],
//   [1, 0, 1, 0],
//   [0, 1, 1, 0],
//   [0, 0, 0, 0],
// ];

const n = grid.length;
const m = grid[0].length;
const vis = [];
for (let i = 0; i < n; i++) {
  vis[i] = [];
  for (let j = 0; j < m; j++) {
    vis[i][j] = 0;
  }
}

const delrow = [-1, 0, +1, 0];
const delcol = [0, +1, +0, -1];

// Helper function for DFS
function dfs(row, col) {
  // check for valid coordinates and for land cell
  if (
    row >= 0 &&
    row < n &&
    col >= 0 &&
    col < m &&
    vis[row][col] === 0 &&
    grid[row][col] === 1
  ) {
    vis[row][col] = 1;
    // Traverse in all 4 directions
    for (let i = 0; i < 4; i++) {
      const nrow = row + delrow[i];
      const ncol = col + delcol[i];
      dfs(nrow, ncol);
    }
  }
}

// Traverse boundary elements and perform DFS
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // first row, first col, last row, last col
    if (
      (i === 0 || j === 0 || i === n - 1 || j === m - 1) &&
      grid[i][j] === 1
    ) {
      dfs(i, j);
    }
  }
}

let cnt = 0;
// Count unvisited land cells
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (grid[i][j] === 1 && vis[i][j] === 0) {
      cnt++;
    }
  }
}
//console.log(cnt);
