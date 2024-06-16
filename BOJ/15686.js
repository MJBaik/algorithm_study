// https://www.acmicpc.net/problem/15686

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

var [n, m] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split(" ").map(Number));

const house = [];
const chicken = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] === 1) {
      house.push([i, j]);
    } else if (input[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}

const visited = Array.from({ length: chicken.length }, () => 0);

function find_chicken_dist() {
  let sum = 0;

  house.forEach(([hy, hx]) => {
    let min = Infinity;

    chicken.forEach((c, c_idx) => {
      if (visited[c_idx] === 1) {
        const [cy, cx] = c;
        const dist = Math.abs(hy - cy) + Math.abs(hx - cx);
        if (min > dist) min = dist;
      }
    });

    sum += min;
  });

  return sum;
}

let answer = Infinity;

function dfs(level, cnt) {
  if (cnt === m) {
    let min_dist = find_chicken_dist();
    if (answer > min_dist) answer = min_dist;
  }

  for (let i = level + 1; i < chicken.length; i++) {
    if (visited[i] === 1) continue;
    visited[i] = 1;
    dfs(i, cnt + 1);
    visited[i] = 0;
  }
}

dfs(-1, 0);

console.log(answer);
