// 암호 만들기
// https://www.acmicpc.net/problem/1759

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

const [l, c] = input.shift().split(" ").map(Number);
input = input.shift().split(" ");
const visited = Array(c).fill(0);
let moum = 0;
let zaum = 0;

input.sort((a, b) => a.charCodeAt() - b.charCodeAt());
const answer = [];

function dfs(level, now, path) {
  if (level === l) {
    if (moum < 1 || zaum < 2) return;
    answer.push(path.join(""));
    return;
  }

  for (let i = now + 1; i < c; i++) {
    if (visited[i] === 1) continue;
    visited[i] = 1;
    let isMoum;
    if (["a", "e", "i", "o", "u"].indexOf(input[i]) > -1) {
      isMoum = true;
      moum++;
    } else {
      isMoum = false;
      zaum++;
    }

    dfs(level + 1, i, [...path, input[i]]);
    visited[i] = 0;
    if (isMoum) {
      moum--;
    } else {
      zaum--;
    }
  }
}

dfs(0, -1, []);

console.log(answer.join("\n"));
