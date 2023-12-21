// SOLVED USING THE DFS

// const image = [
//     [1, 1, 1],
//     [1, 1, 0],
//     [1, 0, 1]
// ];
// let sr = 1, sc = 1, newColor = 2
// const ans = floodFill(image, sr, sc, newColor);
// console.log(ans);
// function dfs(row, col, ans, image, newColor, delRow, delCol, iniColor) {
//     ans[row][col] = newColor;// starting
//     const n = image.length;
//     const m = image[0].length;
//     for (let i = 0; i < 4; i++) {
//         const nrow = row + delRow[i];
//         const ncol = col + delCol[i];
//         if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m && image[nrow][ncol] === iniColor &&
//             ans[nrow][ncol] !== newColor) {
//             dfs(nrow, ncol, ans, image, newColor, delRow, delCol, iniColor);
//         }
//     }
// }
// function floodFill(image, sr, sc, newColor) {
//     const initial_color = image[sr][sc];
//     const ans = [...image];
//     const delRow = [-1, 0, 1, 0];
//     const delCol = [0, 1, 0, -1];
//     dfs(sr, sc, ans, image, newColor, delRow, delCol, initial_color);
//     return ans;
// }

//===============================================
//=================================================
//=================================================

// same question solved using BFS

// function floodFill(image, sr, sc, newColor) {
//     const initialColor = image[sr][sc];
//     const rows = image.length;
//     const cols = image[0].length;

//     // Create a copy of the image to store the result
//     const ans = [...image];

//     // Directions for moving (up, right, down, left)
//     const delRow = [-1, 0, 1, 0];
//     const delCol = [0, 1, 0, -1];

//     // Initialize a queue for BFS
//     const queue = [];
//     queue.push([sr, sc]);

//     while (queue.length > 0) {
//         const [row, col] = queue.shift();
//         ans[row][col] = newColor;

//         for (let i = 0; i < 4; i++) {
//             const nrow = row + delRow[i];
//             const ncol = col + delCol[i];

//             if (
//                 nrow >= 0 &&
//                 nrow < rows &&
//                 ncol >= 0 &&
//                 ncol < cols &&
//                 image[nrow][ncol] === initialColor &&
//                 ans[nrow][ncol] !== newColor
//             ) {
//                 queue.push([nrow, ncol]);
//             }
//         }
//     }

//     return ans;
// }

// // Test the function
// const image = [
//     [1, 1, 1],
//     [1, 1, 0],
//     [1, 0, 1]
// ];
// const sr = 1, sc = 1, newColor = 2;
// const ans = floodFill(image, sr, sc, newColor);
// console.log(ans);
