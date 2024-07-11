// 문자열 게임 2 (G5, 슬라이딩 윈도우)
// https://www.acmicpc.net/problem/20437

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
  const arr = input.shift().split("");
  const n = parseInt(input.shift());
  const alpha = Array.from({ length: 26 }, () => []);

  arr.forEach((e, i) => {
    const idx = e.charCodeAt(0) - 97;
    alpha[idx].push(i);
  });

  let short = Infinity;
  let long = 0;

  for (let each of alpha) {
    if (each.length < n) continue;
    let st = 0;
    let ed = n - 1;
    while (ed < each.length) {
      let len = each[ed] - each[st] + 1;
      if (short > len) short = len;
      if (long < len) long = len;
      st++;
      ed++;
    }
  }
  if (short !== Infinity) {
    answer.push(`${short} ${long}`);
  } else {
    answer.push(`-1`);
  }
}

console.log(answer.join("\n"));
