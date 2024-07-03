// 부분합 (G4, 투포인터)
// https://www.acmicpc.net/problem/1806

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const nums = input.shift().split(" ").map(Number);

let st = 0;
let ed = 0;
let sums = nums[ed];
let answer = Infinity;

while (st < n) {
  if (sums < m) {
    if (ed < n - 1) {
      ed++;
      sums += nums[ed];
    } else break;
  } else if (sums >= m) {
    answer = Math.min(answer, ed - st + 1);
    sums -= nums[st];
    st++;
  }
}

if (answer === Infinity) answer = 0;

console.log(answer);
