// 회전초밥 (G4, 슬라이딩윈도우)
// https://www.acmicpc.net/problem/15961

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, d, k, c] = input.shift().split(" ").map(Number);
const sushi = input.map(Number).concat(input.map(Number));
const ate = Array(d + 1).fill(0);
let cnt = 1;

ate[c]++;

for (let i = 0; i < k; i++) {
  let idx = sushi[i];
  if (ate[idx] === 0) cnt++;
  ate[idx]++;
}

let max = cnt;

for (let i = k; i < n * 2; i++) {
  let prev = sushi[i - k];
  let now = sushi[i];

  ate[prev]--;
  if (ate[prev] === 0) cnt--;
  if (ate[now] === 0) cnt++;
  ate[now]++;
  max = Math.max(max, cnt);
}

console.log(max);
