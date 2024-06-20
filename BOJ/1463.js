// 1로 만들기 (DP)
// https://www.acmicpc.net/problem/1463

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

const n = Number(input.shift());
const arr = Array(n + 1).fill(0);

if (n === 1) {
  console.log(0);
} else {
  for (let i = n - 1; i > 0; i--) {
    let div2, div3;
    div2 = i * 2 <= n ? arr[i * 2] + 1 : Infinity;
    div3 = i * 3 <= n ? arr[i * 3] + 1 : Infinity;
    arr[i] = Math.min(arr[i + 1] + 1, div2, div3);
  }

  console.log(arr[1]);
}
