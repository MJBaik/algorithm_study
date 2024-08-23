// 키로거 (S2, 스택)
// https://www.acmicpc.net/problem/5397

const { doesNotThrow } = require("assert");

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const t = parseInt(input.shift());
const answer = [];

for (let tc = 0; tc < t; tc++) {
  const text = input[tc];
  let cursor = 0;
  let left = [];
  let right = [];

  for (let i = 0; i < text.length; i++) {
    const now = text[i];

    if (now === ">") {
      if (right.length) {
        left.push(right.pop());
      }
    } else if (now === "<") {
      if (left.length) {
        right.push(left.pop());
      }
    } else if (now === "-") {
      if (left.length) {
        left.pop();
      }
    } else {
      left.push(now);
    }
  }

  answer.push(left.join("") + right.reverse().join(""));
}

console.log(answer.join("\n"));
