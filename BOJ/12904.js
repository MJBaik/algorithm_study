// A와 B (G5, 문자열)
// https://www.acmicpc.net/problem/12904

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const text = input.shift();
const target = input.shift();
const arr = target.split("");

let isReversed = false;
let left = 0;
let right = arr.length - 1;

while (right - left + 1 > text.length) {
  let p;
  if (isReversed) {
    p = left;
    left++;
  } else {
    p = right;
    right--;
  }

  if (arr[p] === "A") {
    arr[p] = "";
  } else if (arr[p] === "B") {
    arr[p] = "";
    isReversed = !isReversed;
  }
}

if (isReversed) arr.reverse();

console.log(arr.join("") == text ? 1 : 0);
