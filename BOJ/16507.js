// 어두운 건 무서워
// https://www.acmicpc.net/problem/16507

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

const [r, c, q] = input.shift().split(" ").map(Number);
let arr = input.splice(0, r).map((e) => e.split(" ").map(Number));
const answer = [];

for (let j = 1; j < c; j++) {
  arr[0][j] += arr[0][j - 1];
}

for (let i = 1; i < r; i++) {
  arr[i][0] += arr[i - 1][0];
}

for (let i = 1; i < r; i++) {
  for (let j = 1; j < c; j++) {
    arr[i][j] += arr[i - 1][j] + arr[i][j - 1] - arr[i - 1][j - 1];
  }
}

for (let t = 0; t < q; t++) {
  const [r1, c1, r2, c2] = input
    .shift()
    .split(" ")
    .map((e) => Number(e) - 1);

  let cnt = (r2 - r1 + 1) * (c2 - c1 + 1);
  let minus = 0;

  if (r1 > 0) {
    minus += arr[r1 - 1][c2];
  }
  if (c1 > 0) {
    minus += arr[r2][c1 - 1];
  }
  if (r1 > 0 && c1 > 0) {
    minus -= arr[r1 - 1][c1 - 1];
  }

  let temp = arr[r2][c2] - minus;

  answer.push(Math.floor(temp / cnt).toString());
}

console.log(answer.join("\n"));
