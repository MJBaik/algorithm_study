// 추월 (S1, 문자열)
// https://www.acmicpc.net/problem/2002

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());
const car_in = input.splice(0, n);
const car_out = input.splice(0, n);
const illegal = new Map();

let cnt = 0;
let i = 0;
let now = 0;

while (i < n) {
  if (illegal.get(car_in[now])) {
    now++;
    continue;
  }

  if (car_out[i] !== car_in[now]) {
    cnt++;
    illegal.set(car_out[i], 1);
  } else {
    now++;
  }
  i++;
}

console.log(cnt);
