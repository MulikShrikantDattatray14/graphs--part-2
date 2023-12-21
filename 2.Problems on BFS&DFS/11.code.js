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

// const grid = [
//   [1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0],
//   [1, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 0, 1, 0, 1],
// ];
const grid = [
  ["0", "1", "1", "1", "0", "0", "0"],
  ["0", "0", "1", "1", "0", "1", "0"],
];

console.log(numIslands(grid));
// Function to find the number of islands.
function numIslands(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const vis = [];
  for (let i = 0; i < n; i++) {
    vis[i] = Array(m).fill(0);
  }

  let cnt = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      // if not visited and is land
      if (vis[row][col] == 0 && grid[row][col] == 1) {
        cnt++;
        bfs(row, col, vis, grid);
      }
    }
  }

  return cnt;
}

function bfs(ro, co, vis, grid) {
  vis[ro][co] = 1;
  const queue = new Queue();
  queue.enqueue([ro, co]);
  const n = grid.length;
  const m = grid[0].length;

  // until the queue becomes empty
  while (queue.getLength() !== 0) {
    const [row, col] = queue.dequeue();

    // traverse in the neighbors and mark them if it's land
    for (let delrow = -1; delrow <= 1; delrow++) {
      for (let delcol = -1; delcol <= 1; delcol++) {
        const nrow = row + delrow;
        const ncol = col + delcol;

        // check if neighbor row and column are valid and is an unvisited land
        if (
          nrow >= 0 &&
          nrow < n &&
          ncol >= 0 &&
          ncol < m &&
          grid[nrow][ncol] == 1 &&
          vis[nrow][ncol] == 0
        ) {
          vis[nrow][ncol] = 1;
          queue.enqueue([nrow, ncol]);
        }
      }
    }
  }
}
