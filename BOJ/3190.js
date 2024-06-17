// 뱀
// https://www.acmicpc.net/problem/3190

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

const [n, k] = input.splice(0, 2).map(Number);
const map = Array.from({ length: n }, () => Array(n).fill(0));
map[0][0] = "s";

for (let i = 0; i < k; i++) {
  const [y, x] = input
    .shift()
    .split(" ")
    .map((e) => Number(e) - 1);
  map[y][x] = 1;
}

const l = input.shift();
const move = [];

for (let i = 0; i < l; i++) {
  const [len, dir] = input.shift().split(" ");
  move.push([Number(len), dir]);
}

var dy = [0, 1, 0, -1];
var dx = [1, 0, -1, 0];

var dir = 0;
var count = 0;

function turn(command) {
  if (command === "D") {
    if (dir === 3) {
      dir = 0;
    } else {
      dir++;
    }
  } else if (command === "L") {
    if (dir === 0) {
      dir = 3;
    } else {
      dir--;
    }
  }
}

let body = [[0, 0]];
let [mc, mdir] = move.shift();

while (true) {
  if (count === mc) {
    turn(mdir);
    if (move.length > 0) [mc, mdir] = move.shift();
  }
  const ny = body[0][0] + dy[dir];
  const nx = body[0][1] + dx[dir];
  count++;

  if (ny < 0 || nx < 0 || ny >= n || nx >= n) break;
  if (map[ny][nx] === "s") break;

  if (map[ny][nx] > 0) {
    map[ny][nx] = "s";
    body.unshift([ny, nx]);
  } else {
    map[ny][nx] = "s";
    const [py, px] = body.pop();
    map[py][px] = 0;
    body.unshift([ny, nx]);
  }
}

console.log(count);
