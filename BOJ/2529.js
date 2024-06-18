// 부등호
// https://www.acmicpc.net/problem/2529

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let [k, ...input] = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

k = Number(k);
input = input[0].split(" ");
var visited = Array(10).fill(0);

let max = -Infinity;
let min = Infinity;

function find(level, total) {
  if (level === k + 1) {
    const num = Number(total);
    if (num > Number(max)) max = total;
    if (num < Number(min)) min = total;
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i] === 1) continue;
    if (level > 0) {
      const prev = Number(total[level - 1]);
      if (input[level - 1] === ">") {
        if (i >= prev) continue;
      } else if (input[level - 1] === "<") {
        if (i <= prev) continue;
      }
    }
    visited[i] = 1;
    find(level + 1, total + i.toString());
    visited[i] = 0;
  }
}

find(0, "");

console.log(max, min);
