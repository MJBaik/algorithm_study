// 단절점과 단절선 (S1, 트리)
// https://www.acmicpc.net/problem/14675

const { doesNotThrow } = require("assert");

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());
const q = parseInt(input[n - 1]);
const tree = Array(n + 1).fill(0);
const answer = [];

for (let i = 0; i < n - 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  tree[a]++;
  tree[b]++;
}

for (let i = n; i < input.length; i++) {
  const [type, num] = input[i].split(" ").map(Number);
  const isPoint = type === 1 ? true : false;

  if (!isPoint) {
    answer.push("yes");
  } else {
    if (tree[num] > 1) {
      answer.push("yes");
    } else {
      answer.push("no");
    }
  }
}

console.log(answer.join("\n"));
