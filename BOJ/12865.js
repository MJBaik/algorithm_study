// 평범한 배낭 (G5, DP)
// https://www.acmicpc.net/problem/12865

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

const [n, k] = input.shift().split(" ").map(Number);
input = [[0, 0], ...input.map((e) => e.split(" ").map(Number))];

const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

for (let i = 1; i < n + 1; i++) {
  let [wei, val] = input[i];
  for (let j = 1; j < k + 1; j++) {
    if (j < wei) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - wei] + val);
    }
  }
}

console.log(dp[n][k]);
