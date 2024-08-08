// 음악프로그램 (G3, 위상정렬)
// https://www.acmicpc.net/problem/2623

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const index = Array(n + 1).fill(0);

input.forEach((ea) => {
  const [i, ...rest] = ea.split(" ").map(Number);
  for (let j = 0; j < i - 1; j++) {
    graph[rest[j]].push(rest[j + 1]);
    index[rest[j + 1]]++;
  }
});

const q = [];
const answer = [];

for (let i = 1; i <= n; i++) {
  if (!index[i]) q.push(i);
}

while (q.length > 0) {
  let cur = q.shift();
  answer.push(cur);
  for (let next of graph[cur]) {
    index[next]--;
    if (!index[next]) q.push(next);
  }
}

console.log(answer.length === n ? answer.join("\n") : 0);
