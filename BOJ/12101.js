// 1, 2, 3 더하기 2 (S1, 백트래킹)
// https://www.acmicpc.net/problem/12101

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

const [n, k] = input.shift().split(" ").map(Number);
var cnt = 0;
var answer = [-1];

function dfs(total, path) {
  if (total > n) return;
  if (total === n) {
    cnt++;
    if (cnt === k) answer = path;
    return;
  }

  for (let i = 1; i < 4; i++) {
    dfs(total + i, [...path, i]);
  }
}

dfs(0, []);

console.log(answer.join("+"));
