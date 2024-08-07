// 사이클 게임 (G4, 유니온파인드)
// https://www.acmicpc.net/problem/20040

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const boss = Array.from({ length: n }, (_, i) => i);

function findboss(x) {
  if (boss[x] === x) return x;
  return findboss(boss[x]);
}

function union(a, b) {
  const fa = findboss(a);
  const fb = findboss(b);
  if (fa === fb) return true;

  if (fa < fb) {
    boss[fb] = fa;
  } else {
    boss[fa] = fb;
  }
  return false;
}

let num = -1;

for (let [idx, ea] of input.entries()) {
  const [a, b] = ea.split(" ").map(Number);
  const ans = union(a, b);
  if (ans) {
    num = idx + 1;
    break;
  }
}

console.log(num > -1 ? num : 0);
