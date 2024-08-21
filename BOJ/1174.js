// 줄어드는 수 (G5, 브루트포스)
// https://www.acmicpc.net/problem/1174

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());
const arr = Array.from({ length: 10 }, (_, i) => i.toString());

for (const e of arr) {
  for (let i = 0; i < e % 10; i++) {
    arr.push(e + i.toString());
  }
}

console.log(n - 1 < arr.length ? arr[n - 1] : -1);
