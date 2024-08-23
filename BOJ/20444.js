// 색종이와 가위 (G5, 이분탐색)
// https://www.acmicpc.net/problem/20444

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, k] = input.shift().split(" ").map(BigInt);
let half = (n + 2n) / 2n;
let isPossible = false;

let st = 1n;
let ed = half;

while (st <= ed) {
  let mid = (st + ed) / 2n;
  const paper = mid * (n + 2n - mid);

  if (paper === k) {
    isPossible = true;
    break;
  } else if (paper < k) {
    st = mid + 1n;
  } else {
    ed = mid - 1n;
  }
}

console.log(isPossible ? "YES" : "NO");
