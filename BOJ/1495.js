// 기타리스트 (S1, DP)
// https://www.acmicpc.net/problem/1495

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, s, m] = input.shift().split(" ").map(Number);
const nums = input.shift().split(" ").map(Number);

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
dp[0][s] = 1;

for (let i = 0; i < n + 1; i++) {
  for (let j = 0; j < m + 1; j++) {
    let now = dp[i][j];
    if (now === 1) {
      let num = nums[i];
      if (j + num <= m) {
        dp[i + 1][j + num] = 1;
      }
      if (j - num >= 0) {
        dp[i + 1][j - num] = 1;
      }
    }
  }
}

let flag = false;

for (let j = m; j >= 0; j--) {
  if (dp[n][j] === 1) {
    console.log(j);
    flag = true;
    break;
  }
}

if (!flag) console.log(-1);
