// 플로이드 (G4, 플로이드-워셜)
// https://www.acmicpc.net/problem/11404

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());
const m = parseInt(input.shift());
const map = Array.from({ length: n }, () => Array(n).fill(Infinity));

for (let i = 0; i < n; i++) {
  map[i][i] = 0;
}

input.forEach((ea) => {
  const [st, ed, cost] = ea.split(" ").map(Number);
  if (map[st - 1][ed - 1] > cost) map[st - 1][ed - 1] = cost;
});

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j] = Math.min(map[i][j], map[i][k] + map[k][j]);
    }
  }
}

console.log(
  map.map((e) => e.map((ea) => (ea === Infinity ? 0 : ea)).join(" ")).join("\n")
);
