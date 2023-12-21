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

function orangesRotting(grid) {
  if (grid == null || grid.length === 0) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = new Queue();
  let count_fresh = 0;

  // Put the position of all rotten oranges in the queue
  // Count the number of fresh oranges
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.enqueue([i, j]);
      }
      if (grid[i][j] !== 0) {
        count_fresh++;
      }
    }
  }

  if (count_fresh === 0) return 0;
  let countMin = 0,
    cnt = 0;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  // BFS starting from initially rotten oranges
  while (!queue.isEmpty()) {
    const size = queue.getLength();
    cnt += size; //count of 2s
    for (let i = 0; i < size; i++) {//for entire level
      // Dequeue: Remove and return the front element of the queue
      const point = queue.dequeue();
      //// check for all the neighbouring points
      for (let j = 0; j < 4; j++) {
        const x = point[0] + dx[j];
        const y = point[1] + dy[j];

        if (
          x < 0 ||
          y < 0 ||
          x >= rows ||
          y >= cols ||
          grid[x][y] === 0 ||
          grid[x][y] === 2
        )
          continue;

        grid[x][y] = 2;
        // pushing each adjacent element into queue
        queue.enqueue([x, y]);
      }
    }
    if (!queue.isEmpty()) {
      countMin++;
    }
  }
  //when all the fresh fruits(i.e countfresh) got rotten(i.cnt)
  return count_fresh === cnt ? countMin : -1;
}
// let A = [
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ];//4

A = [   [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1]   ]//-1
console.log(orangesRotting(A));
