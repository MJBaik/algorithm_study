// 입국심사 (G5, 이분탐색)
// https://www.acmicpc.net/problem/3079

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const desk = input.map(Number);
desk.sort((a, b) => a - b);

let st = BigInt(0);
let ed = BigInt(desk[n - 1] * m);
let min = ed;

while (st <= ed) {
  let mid = BigInt((st + ed) / BigInt(2));
  let total = BigInt(0);

  for (i of desk) {
    total += mid / BigInt(i);
  }

  if (total >= m) {
    ed = mid - BigInt(1);
    min = min > mid ? mid : min;
  } else {
    st = mid + BigInt(1);
  }
}

console.log(String(min));
