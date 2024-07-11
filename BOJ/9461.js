// 파도반 수열(S3, DP)
// https://www.acmicpc.net/status?group_id=18758

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const tc = parseInt(input.shift());

const dp = Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i < 101; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

const answer = [];

input.forEach((e) => {
  answer.push(dp[Number(e)]);
});

console.log(answer.join("\n"));
