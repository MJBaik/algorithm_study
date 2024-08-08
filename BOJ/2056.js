// 작업 (G4, 위상정렬+DP)
// https://www.acmicpc.net/problem/2056

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());

const indegree = Array(n + 1).fill(0);
const graph = Array.from({ length: n + 1 }, () => []);
const dp = Array(n + 1).fill(0);
const time = [0];

input.forEach((each, i) => {
  const [t, c, ...prev] = each.split(" ").map(Number);
  time.push(t);
  if (c > 0) {
    prev.forEach((e) => {
      graph[e].push(i + 1);
      indegree[i + 1]++;
    });
  }
});

const q = [];

for (let i = 1; i <= n; i++) {
  if (indegree[i] === 0) {
    q.push(i);
    dp[i] = time[i];
  }
}

while (q.length > 0) {
  const now = q.shift();
  for (let i of graph[now]) {
    indegree[i]--;
    dp[i] = Math.max(dp[now] + time[i], dp[i]);
    if (indegree[i] === 0) {
      q.push(i);
    }
  }
}

console.log(Math.max(...dp));
