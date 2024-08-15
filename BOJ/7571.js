// 점 모으기 (S1, 수학)
// https://www.acmicpc.net/problem/7571

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const xArr = [];
const yArr = [];

input.forEach((ea) => {
  const [y, x] = ea.split(" ").map(Number);
  yArr.push(y);
  xArr.push(x);
});

xArr.sort((a, b) => a - b);
yArr.sort((a, b) => a - b);

const xm = xArr[Math.floor(m / 2)];
const ym = yArr[Math.floor(m / 2)];

let answer = 0;

for (let i = 0; i < m; i++) {
  answer += Math.abs(xm - xArr[i]) + Math.abs(ym - yArr[i]);
}

console.log(answer);
