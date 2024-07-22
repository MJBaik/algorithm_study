// 방 번호 (G3, DP)
// https://www.acmicpc.net/problem/1082

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());
const m = parseInt(input.pop());
const p = input[0].split(" ").map(Number);
const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(BigInt(0)));

for (let i = n - 1; i >= 0; i--) {
  const now = p[i];

  for (let j = 0; j < m + 1; j++) {
    if (j < now) {
      dp[i][j] = dp[i + 1][j];
      continue;
    }
    let col = j - now;
    let temp =
      col >= 0 && dp[i + 1][col] !== 0 ? dp[i + 1][col].toString() : "";
    let temp2 = dp[i][col] !== 0 ? dp[i][col].toString() : "";

    for (let k = 1; k <= (j - col) / now; k++) {
      temp += `${i}`;
      temp2 += `${i}`;
    }

    dp[i][j] = dp[i + 1][j] > BigInt(temp) ? dp[i + 1][j] : BigInt(temp);
    dp[i][j] = dp[i][j] > BigInt(temp2) ? dp[i][j] : BigInt(temp2);
  }
}

console.log(dp[0][m].toString());
