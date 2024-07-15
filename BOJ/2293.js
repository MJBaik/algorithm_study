// 동전1 (DP)
// https://www.acmicpc.net/problem/2293

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, k] = input.shift().split(" ").map(Number);
const dp = Array(k + 1).fill(0);
dp[0] = 1;

for (let i = 0; i < n; i++) {
  const tmp = input[i];

  for (let l = tmp; l < k + 1; l++) {
    dp[l] += dp[l - tmp];
  }
}

console.log(dp[k]);
