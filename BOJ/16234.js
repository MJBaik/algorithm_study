// 인구 이동 (G4, 완탐, 백트래킹)
// https://www.acmicpc.net/problem/16234

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

const [n, l, r] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split(" ").map(Number));

class Node {
  constructor(item) {
    this.node = item;
    this.next = null;
  }
}

class Heap {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const newNode = new Node(item);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  popleft() {
    if (this.size === 0) return undefined;
    const returnValue = this.head.node;
    this.head = this.head.next;
    this.size--;
    return returnValue;
  }
}

function bfs(sty, stx) {
  const q = new Heap();
  q.push([sty, stx]);
  const union = [[sty, stx]];
  let sum = input[sty][stx];
  let cnt = 1;

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  while (q.size > 0) {
    const [y, x] = q.popleft();

    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];

      if (ny < 0 || nx < 0 || ny >= n || nx >= n) continue;
      let dif = Math.abs(input[ny][nx] - input[y][x]);
      if (dif < l || dif > r) continue;
      if (visited[ny][nx] === 1) continue;
      visited[ny][nx] = 1;
      union.push([ny, nx]);
      sum += input[ny][nx];
      cnt++;
      q.push([ny, nx]);
    }
  }

  if (cnt > 1) {
    let mid = Math.floor(sum / cnt);
    for ([y, x] of union) {
      input[y][x] = mid;
    }

    return true;
  } else {
    return false;
  }
}

let answer = 0;

while (true) {
  var visited = Array.from({ length: n }, () => Array(n).fill(0));
  let stop = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === 0) {
        visited[i][j] = 1;
        if (bfs(i, j)) stop++;
      }
    }
  }
  if (stop === 0) break;
  answer++;
}

console.log(answer);
