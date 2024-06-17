// 요세푸스문제
// https://www.acmicpc.net/problem/1158

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

let [n, k] = input.shift().split(" ").map(Number);

const arr = Array.from({ length: n }, (_, idx) => idx + 1);
const answer = [];

while (arr.length > 0) {
  for (let i = 0; i < k - 1; i++) {
    let temp = arr.shift();
    arr.push(temp);
  }
  let temp = arr.shift();
  answer.push(temp);
}

console.log(`<${answer.join(", ")}>`);
