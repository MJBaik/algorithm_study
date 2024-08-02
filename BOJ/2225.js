// 합분해 (G5, DP)

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, k] = input.shift().split(" ").map(Number);
const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(1));

for (let i = 2; i < k + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
  }
}

console.log(dp[k][n]);
