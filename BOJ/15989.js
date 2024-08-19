// 1, 2, 3 더하기 4 (G5, DP)
// https://www.acmicpc.net/problem/15989

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());

const dp = Array.from({ length: 4 }, () =>
  Array.from({ length: 10001 }, (_, i) => (i === 0 ? 1 : 0))
);

for (let i = 1; i < 4; i++) {
  for (let j = 1; j < 10001; j++) {
    if (j < i) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = dp[i - 1][j] + dp[i][j - i];
    }
  }
}

const answer = [];

input.forEach((e) => answer.push(dp[3][Number(e)]));

console.log(answer.join("\n"));
