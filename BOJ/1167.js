// 트리의 지름 (G2, DFS)
// https://www.acmicpc.net/problem/1167

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());
const tree = Array.from({ length: n }, () => []);

let visited = Array(n).fill(0);
let max = { node: 0, dist: -Infinity };

input.forEach((each) => {
  const nums = each.split(" ").map(Number);
  const st = nums.shift() - 1;

  for (let i = 0; i < Math.floor((nums.length - 1) / 2); i++) {
    let ed = nums[i * 2] - 1;
    let cost = nums[i * 2 + 1];
    tree[st].push([ed, cost]);
  }
});

function dfs(now, total) {
  visited[now] = 1;
  if (max.dist < total) max = { node: now, dist: total };

  for (let [next, cost] of tree[now]) {
    if (visited[next] === 1) continue;
    dfs(next, total + cost);
  }
}

dfs(1, 0);

max.dist = -Infinity;
visited = Array(n).fill(0);

dfs(max.node, 0);

console.log(max.dist);
