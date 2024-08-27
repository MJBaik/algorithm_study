// 공통 부분 문자열 (G5, DP)
// https://www.acmicpc.net/problem/5582

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const text1 = input.shift();
const text2 = input.shift();

const dp = Array.from({ length: text1.length + 1 }, () =>
  Array(text2.length + 1).fill(0)
);

let max = 0;

for (let i = 1; i <= text1.length; i++) {
  let t1 = text1[i - 1];
  for (let j = 1; j <= text2.length; j++) {
    if (t1 === text2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
      max = Math.max(max, dp[i][j]);
    }
  }
}

console.log(max);
