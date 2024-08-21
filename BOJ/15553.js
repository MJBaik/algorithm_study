// 난로 (G5, 정렬)
// https://www.acmicpc.net/problem/15553

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

let [n, k] = input.shift().split(" ").map(Number);
const fire = Array(n).fill(0);
const time = [];
input = input.map(Number);

for (let i = 0; i < n - 1; i++) {
  time.push([input[i], input[i + 1], i + 1]);
}

time.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

fire[0] = 1;
k--;

for (let i = 0; i < k; i++) {
  let idx = time[i][2];
  fire[idx] = 1;
}

let answer = 1;

for (let i = 0; i < input.length - 1; i++) {
  if (fire[i + 1] === 0) {
    answer += input[i + 1] - input[i];
  } else {
    answer += 1;
  }
}

console.log(answer);
