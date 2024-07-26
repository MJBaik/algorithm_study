// 노드 사이의 거리 (플로이드워셜)
// https://www.acmicpc.net/problem/1240

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const map = Array.from({ length: n }, () => Array(n).fill(Infinity));

for (let i = 0; i < n - 1; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  a--;
  b--;
  map[a][b] = c;
  map[b][a] = c;
  map[a][a] = 0;
  map[b][b] = 0;
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j]);
    }
  }
}

const answer = [];

for (let i = n - 1; i < input.length; i++) {
  const [y, x] = input[i].split(" ").map(Number);
  answer.push(map[y - 1][x - 1]);
}

console.log(answer.join("\n"));
