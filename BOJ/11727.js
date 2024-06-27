// 2×n 타일링 2 (S3, DP)
// https://www.acmicpc.net/problem/11727

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

let n = parseInt(input.shift());
const arr = Array(n + 1).fill(0);

arr[1] = 1;
arr[2] = 3;

for (let i = 3; i <= n; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2] * 2) % 10007;
}

console.log(arr[n]);
