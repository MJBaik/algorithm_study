// 동전 (G5, DP)
// https://www.acmicpc.net/problem/9084

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const t = parseInt(input.shift());
const answer = [];

for (let tc = 0; tc < t; tc++) {
  const n = parseInt(input.shift());
  const coins = input.shift().split(" ").map(Number);
  const m = parseInt(input.shift());
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i < n + 1; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < n + 1; i++) {
    let tmp = coins[i - 1];
    for (let j = 1; j < m + 1; j++) {
      if (j < tmp) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - tmp];
      }
    }
  }

  answer.push(dp[n][m]);
}

console.log(answer.join("\n"));
