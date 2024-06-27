// 성적 평균 (Lv3)
// https://softeer.ai/practice/6294

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const scores = input.shift().split(" ").map(Number);

for (let i = 1; i < n; i++) {
  scores[i] += scores[i - 1];
}

const answer = [];

for (let tc = 0; tc < k; tc++) {
  let [st, ed] = input[tc].split(" ").map((e) => Number(e) - 1);
  const len = ed - st + 1;

  let sum = scores[ed];
  if (st > 0) sum -= scores[st - 1];
  answer.push((Math.round((sum / len) * 100, 2) / 100).toFixed(2));
}

console.log(answer.join("\n"));
