// 테트로미노
// https://www.acmicpc.net/status?group_id=18758

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

var [n, m] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split(" ").map(Number));
var max = -Infinity;

var visited = Array.from({ length: n }, () => Array(m).fill(0));
var dy = [0, -1, 0, 1];
var dx = [1, 0, -1, 0];

function dfs(level, sum, nowY, nowX) {
  if (level === 3) {
    if (sum > max) {
      max = sum;
    }
    return;
  }

  for (let i = 0; i < 4; i++) {
    const ny = nowY + dy[i];
    const nx = nowX + dx[i];
    if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
    if (visited[ny][nx] === 1) continue;
    visited[ny][nx] = 1;
    dfs(level + 1, sum + input[ny][nx], ny, nx);
    visited[ny][nx] = 0;
  }
}

function boko(level, sty, stx, sum, path) {
  if (level === 3) {
    if (sum > max) max = sum;
    return;
  }
  for (let i = 0; i < 4; i++) {
    const ny = sty + dy[i];
    const nx = stx + dx[i];
    if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
    if (visited[ny][nx] === 1) continue;
    visited[ny][nx] = 1;
    boko(level + 1, sty, stx, sum + input[ny][nx], [...path, [ny, nx]]);
    visited[ny][nx] = 0;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = 1;
    dfs(0, input[i][j], i, j);
    boko(0, i, j, input[i][j], [[i, j]]);
    visited[i][j] = 0;
  }
}

console.log(max);
