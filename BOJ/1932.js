// 정수삼각형 (S1, DP)
// https://www.acmicpc.net/problem/1932

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());
const nums = input.map((e) => e.split(" ").map(Number));
let max = nums[0][0];

for (let i = 1; i < n; i++) {
  let len = nums[i].length;
  for (let j = 0; j < len; j++) {
    let left = j > 0 ? nums[i - 1][j - 1] : 0;
    let right = j < len - 1 ? nums[i - 1][j] : 0;

    nums[i][j] += Math.max(left, right);
    if (i === n - 1) max = Math.max(nums[i][j], max);
  }
}

console.log(max);
