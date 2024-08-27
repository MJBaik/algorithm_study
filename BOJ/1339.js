// 단어 수학 (G4, 그리디)
// https://www.acmicpc.net/problem/1339

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const n = parseInt(input.shift());
const alpha = new Map();

input.forEach((e) => {
  const word = e.split("");
  const len = word.length - 1;

  word.forEach((letter, i) => {
    const now = alpha.get(letter);
    const idx = len - i;

    if (!now) {
      alpha.set(letter, 10 ** idx);
    } else {
      alpha.set(letter, now + 10 ** idx);
    }
  });
});

const arr = Array.from(alpha.entries());
arr.sort((a, b) => b[1] - a[1]);

let answer = 0;
let now = 9;

arr.forEach((ea) => {
  const [le, num] = ea;

  answer += num * now;
  now--;
});

console.log(answer);
