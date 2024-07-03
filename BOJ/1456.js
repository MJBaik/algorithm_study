// 거의 소수 (G5, 에라토스테네스의 체)
// https://www.acmicpc.net/problem/1456

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [a, b] = input.shift().split(" ").map(Number);
const max = Math.floor(Math.sqrt(10 ** 14)) + 1;
let primes = Array(max).fill(true);

for (let i = 2; i < max; i++) {
  if (!primes[i]) continue;
  for (let j = i + i; j < max; j += i) {
    primes[j] = false;
  }
}

let count = 0;

for (let i = 2; i < primes.length; i++) {
  if (!primes[i]) continue;

  let last = i ** 2;

  while (last <= b) {
    if (last >= a) count++;
    last *= i;
  }
}

console.log(count);
