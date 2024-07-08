// 좋은수열 (G4, 백트래킹)
// https://www.acmicpc.net/problem/2661

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");

const n = parseInt(input.shift());
let answer = Infinity;

function dfs(level, text) {
  if (answer !== Infinity) return;
  if (level > 1) {
    let len = text.length;
    for (let i = len - 1; i > Math.floor((len + 1) / 2) - 1; i--) {
      const arr = text.split("").slice(i, len);

      let flag = true;
      for (let j = i - arr.length; j < i; j++) {
        let leng = j - (i - arr.length);
        if (text[j] !== text[i + leng]) {
          flag = false;
          break;
        }
      }
      if (flag) return;
    }
  }
  if (level === n) {
    if (BigInt(text) < answer) answer = BigInt(text);
    return;
  }

  for (let i of ["1", "2", "3"]) {
    if (i !== text[level - 1]) dfs(level + 1, text + i);
  }
}

dfs(1, "1");

console.log(answer.toString());
