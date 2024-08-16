// 타임머신 （G4, 벨만포드)
// https://www.acmicpc.net/problem/11657

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const node = [];
const costs = Array(n + 1).fill(Infinity);

input.forEach((ea) => {
  const [a, b, c] = ea.split(" ").map(Number);
  node.push([a, b, c]);
});

function bellman_ford() {
  costs[1] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const [now, next, cost] = node[j];

      if (costs[now] !== Infinity && costs[next] > costs[now] + cost) {
        costs[next] = costs[now] + cost;
        if (i === n - 1) return true;
      }
    }
  }
  return false;
}

const ret = bellman_ford();

console.log(
  ret
    ? -1
    : costs
        .slice(2)
        .map((e) => (e === Infinity ? -1 : e))
        .join("\n")
);
