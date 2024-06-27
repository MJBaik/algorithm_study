// 퇴사 (S3, DP)
// https://www.acmicpc.net/problem/14501

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

let n = parseInt(input.shift());
input = input.map((e) => e.split(" ").map(Number));
let dp = Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = i + input[i][0]; j < n + 1; j++) {
    if (i + input[i][0] > n) break;
    if (dp[j] < dp[i] + input[i][1]) {
      dp[j] = dp[i] + input[i][1];
    }
  }
}

console.log(dp[n]);
