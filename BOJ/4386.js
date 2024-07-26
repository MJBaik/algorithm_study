// 별자리 만들기 (G3, 최소스패닝트리)
// https://www.acmicpc.net/problem/4386

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());
const arr = input.map((e) => e.split(" ").map(parseFloat));
const stars = [];
const boss = Array.from({ length: n }, (_, i) => i);
let total = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    let x = Math.abs(arr[i][0] - arr[j][0]);
    let y = Math.abs(arr[i][1] - arr[j][1]);
    let len = Math.sqrt(x ** 2 + y ** 2);
    stars.push([len, i, j]);
  }
}
stars.sort((a, b) => a[0] - b[0]);

function findboss(x) {
  if (boss[x] === x) return x;
  const bx = findboss(boss[x]);
  boss[x] = bx;
  return bx;
}

function union(a, b) {
  const fa = findboss(a);
  const fb = findboss(b);
  if (fa === fb) return false;

  if (fa < fb) {
    boss[fb] = fa;
  } else {
    boss[fa] = fb;
  }
  return true;
}

for (let i = 0; i < stars.length; i++) {
  const [cost, st, ed] = stars[i];
  const ret = union(st, ed);
  if (ret) {
    total += cost;
  }
}

console.log(Math.floor(total * 100) / 100);
