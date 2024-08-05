// 집합의 표현 (G5, 유니온파인드)
// https://www.acmicpc.net/problem/1717

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findboss(x) {
  if (boss[x] === x) return x;
  return findboss(boss[x]);
}

function union(a, b) {
  const fa = findboss(a);
  const fb = findboss(b);
  if (fa === fb) return 0;

  boss[fb] = fa;
  return 1;
}

const answer = [];

let boss;
let count = -1;

rl.on("line", (line) => {
  if (count === -1) {
    const [n, m] = line.split(" ").map(Number);
    boss = Array.from({ length: n + 1 }, (_, i) => i);
    count = m;
    return;
  }

  const [o, a, b] = line.split(" ").map(Number);
  if (o === 1) {
    if (findboss(a) === findboss(b)) {
      answer.push("YES");
    } else answer.push("NO");
  } else if (o === 0) {
    union(a, b);
  }

  count--;
  if (count === 0) rl.close();
}).on("close", () => {
  console.log(answer.join("\n"));
});
