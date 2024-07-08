// 2xn 타일링 (S3, DP)
// https://www.acmicpc.net/problem/11726

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");

const n = parseInt(input.shift());
const dp = Array(n + 1).fill(BigInt(0));

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < n + 1; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n]);
