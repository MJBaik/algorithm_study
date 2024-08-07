// 가장 큰 정사각형 (G4, DP)
// https://www.acmicpc.net/problem/1915

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const nums = input.map((e) => e.split("").map(Number));
const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
let max_width = 0;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (nums[i - 1][j - 1] === 1) {
      let py = dp[i - 1][j];
      let px = dp[i][j - 1];
      let pd = dp[i - 1][j - 1];

      if (px === 0 || py === 0 || pd === 0) {
        dp[i][j] = 1;
      } else if (px === py && px === pd) {
        dp[i][j] = (Math.sqrt(px) + 1) ** 2;
      } else {
        dp[i][j] = (Math.sqrt(Math.min(px, py, pd)) + 1) ** 2;
      }
      max_width = Math.max(max_width, dp[i][j]);
    }
  }
}

console.log(max_width);
