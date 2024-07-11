// 알파벳 (G4, 백트래킹)
// https://www.acmicpc.net/problem/1987

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((e) => e.split(""));

var visited = Array(26).fill(0);
var max = 0;

visited[arr[0][0].charCodeAt(0) - 65] = 1;

var dy = [1, 0, -1, 0];
var dx = [0, 1, 0, -1];

function bfs(y, x, len) {
  if (len > max) max = len;

  for (let k = 0; k < 4; k++) {
    const ny = y + dy[k];
    const nx = x + dx[k];
    if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
    let letter = arr[ny][nx].charCodeAt(0) - 65;
    if (visited[letter] === 1) continue;
    visited[letter] = 1;
    bfs(ny, nx, len + 1);
    visited[letter] = 0;
  }
}

bfs(0, 0, 1);

console.log(max);
