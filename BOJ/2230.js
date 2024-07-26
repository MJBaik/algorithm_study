// 수 고르기 (투포인터)
// https://www.acmicpc.net/problem/2230

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map(Number);
arr.sort((a, b) => a - b);

let st = 0;
let ed = 1;
let min = Infinity;

while (st < n) {
  let stn = arr[st];
  let edn = arr[ed];

  if (edn - stn < m) {
    if (ed < n - 1) {
      ed++;
    } else break;
  } else {
    min = Math.min(min, edn - stn);
    st++;
  }
}

console.log(min);
