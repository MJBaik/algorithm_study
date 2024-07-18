// 문자열 폭발 (G4, 스택)
// https://www.acmicpc.net/problem/9935

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const text = input[0];
const bomb = input[1];
let bl = bomb.length;
let stack = [];
const last = bomb[bl - 1];

for (let i = 0; i < text.length; i++) {
  let temp = text[i];
  stack.push(temp);

  let sl = stack.length;

  if (sl >= bl && temp === last) {
    if (stack.slice(sl - bl, sl).join("") === bomb) {
      stack.splice(sl - bl);
    }
  }
}

console.log(stack.length > 0 ? stack.join("") : "FRULA");
