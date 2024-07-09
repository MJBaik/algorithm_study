// 회전 초밥(S1, 슬라이딩 윈도우)
// https://www.acmicpc.net/problem/2531

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");

const [n, d, k, c] = input.shift().split(" ").map(Number);
const sushi = input.concat(input).map(Number);

const ate = new Map();
ate.set(c, 1);

for (let i = 0; i < k; i++) {
  const now = sushi[i];
  if (ate.get(now)) {
    ate.set(now, ate.get(now) + 1);
  } else {
    ate.set(now, 1);
  }
}

let answer = ate.size;

let st = 1;
let ed = k;

while (ed < n * 2) {
  let prev = sushi[st - 1];
  let now = sushi[ed];

  ate.set(prev, ate.get(prev) - 1);
  if (ate.get(prev) === 0) ate.delete(prev);

  if (ate.get(now)) {
    ate.set(now, ate.get(now) + 1);
  } else {
    ate.set(now, 1);
  }
  if (answer < ate.size) answer = ate.size;
  st++;
  ed++;
}

console.log(answer);
