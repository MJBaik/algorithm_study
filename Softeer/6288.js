// 금고털이 (Lv2)
// https://softeer.ai/practice/6288

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [w, n] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split(" ").map(Number));
input.sort((a, b) => b[1] - a[1]);

const dp = Array(w + 1).fill(0);

let ed = 1;
let idx = 0;

while (ed <= w && idx < input.length) {
  let [wei, val] = input[idx];

  while (wei > 0) {
    dp[ed] = dp[ed - 1] + val;
    wei--;
    ed++;
  }

  idx++;
}

console.log(dp[w]);
