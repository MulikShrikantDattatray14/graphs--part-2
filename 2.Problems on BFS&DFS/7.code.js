const mat = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
    ['X', 'X', 'O', 'O'],
];

const ans = fill(mat.length, mat[0].length, mat);

for (let i = 0; i < 5; i++) {
    console.log(ans[i].join(' '));
}

function dfs(row, col, vis, mat, delrow, delcol) {
    vis[row][col] = 1;
    const n = mat.length;
    const m = mat[0].length;

    for (let i = 0; i < 4; i++) {
        const nrow = row + delrow[i];
        const ncol = col + delcol[i];

        if (
            nrow >= 0 &&
            nrow < n &&
            ncol >= 0 &&
            ncol < m &&
            vis[nrow][ncol] === 0 &&
            mat[nrow][ncol] === 'O'
        ) {
            dfs(nrow, ncol, vis, mat, delrow, delcol);
        }
    }
}

function fill(n, m, mat) {
    const delrow = [-1, 0, +1, 0];
    const delcol = [0, 1, 0, -1];
    const vis = [];
    for (let i = 0; i < n; i++) {
      vis[i] = [];
      for (let j = 0; j < m; j++) {
        vis[i][j] = 0;
      }
    }
    for (let j = 0; j < m; j++) {
        if (vis[0][j] === 0 && mat[0][j] === 'O') {
            dfs(0, j, vis, mat, delrow, delcol);
        }

        if (vis[n - 1][j] === 0 && mat[n - 1][j] === 'O') {
            dfs(n - 1, j, vis, mat, delrow, delcol);
        }
    }

    for (let i = 0; i < n; i++) {
        if (vis[i][0] === 0 && mat[i][0] === 'O') {
            dfs(i, 0, vis, mat, delrow, delcol);
        }

        if (vis[i][m - 1] === 0 && mat[i][m - 1] === 'O') {
            dfs(i, m - 1, vis, mat, delrow, delcol);
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (vis[i][j] === 0 && mat[i][j] === 'O') mat[i][j] = 'X';
        }
    }

    return mat;
}
