// 택배 (G1, 그리디)
// https://www.acmicpc.net/problem/8980

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, c] = input.shift().split(" ").map(Number);
const m = Number(input.shift());
const delivery = [];

input.forEach((e) => {
  const [from, to, amount] = e.split(" ").map(Number);
  delivery.push([from - 1, to - 1, amount]);
});

delivery.sort((a, b) => a[1] - b[1]);

let capa = Array(n).fill(c);

let answer = 0;

for (let [st, ed, cnt] of delivery) {
  let min = c;
  for (let i = st; i < ed; i++) {
    if (min > Math.min(capa[i], cnt)) {
      min = Math.min(capa[i], cnt);
    }
  }
  for (let i = st; i < ed; i++) {
    capa[i] -= min;
  }
  answer += min;
}

console.log(answer);
