// 가장 긴 증가하는 부분 수열(S2, DP)
// https://www.acmicpc.net/problem/11053

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");

const n = parseInt(input.shift());
const arr = input.shift().split(" ").map(Number);

const dp = Array(n).fill(0);
dp[0] = 1;

for (let i = 1; i < n; i++) {
  let max = 0;
  for (let j = 0; j <= i; j++) {
    if (arr[j] < arr[i]) {
      max = Math.max(max, dp[j]);
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
