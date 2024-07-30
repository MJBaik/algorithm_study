// 스카이라인 쉬운거 (G4, 스택)
// https://www.acmicpc.net/problem/1863

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());
const buildings = input.map((e) => e.split(" ").map(Number));
buildings.sort((a, b) => a[0] - b[0]);
buildings.push([999, 0]);

let cnt = 0;
const stack = [0];

for (let [x, y] of buildings) {
  let now = y;
  while (stack.length > 0 && stack[stack.length - 1] > y) {
    if (stack[stack.length - 1] !== now) {
      cnt++;
      now = stack[stack.length - 1];
    }
    stack.pop();
  }
  stack.push(y);
}

console.log(cnt);
