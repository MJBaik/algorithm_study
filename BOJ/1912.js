// 연속합 (DP)
// https://www.acmicpc.net/problem/1912

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

const n = Number(input.shift());
let arr = input.shift().split(" ").map(Number);
let max = arr[0];

for (let i = 1; i < n; i++) {
  arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
  if (arr[i] > max) max = arr[i];
}

console.log(max);
