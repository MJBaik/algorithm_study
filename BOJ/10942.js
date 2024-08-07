// 팰린드롬? (G4, DP)
// https://www.acmicpc.net/problem/10942

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let [n, nums, m, ...input] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

nums = nums.split(" ").map(Number);
[n, m] = [n, m].map(Number);

const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = n; i > 0; i--) {
  for (let j = i; j <= n; j++) {
    if (i === j) {
      dp[i][j] = 1;
    } else if (nums[i - 1] === nums[j - 1]) {
      if (j - i === 1) dp[i][j] = 1;
      else dp[i][j] = dp[i + 1][j - 1];
    }
  }
}

// console.log(dp.map((e) => e.join(" ")).join("\n"));

const answer = [];

input.forEach((ea) => {
  const [st, ed] = ea.split(" ").map(Number);
  answer.push(dp[st][ed]);
});

console.log(answer.join("\n"));
