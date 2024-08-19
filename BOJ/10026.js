// 적록색약 (G5, BFS)
// https://www.acmicpc.net/problem/10026

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

class Node {
  constructor(item) {
    this.node = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(item) {
    let node = new Node(item);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    const ret = this.head.node;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return ret;
  }
}

const n = parseInt(input.shift());
const map = input.map((e) => e.split(""));
let visited = Array.from({ length: n }, () => Array(n).fill(0));

function bfs(sty, stx, type, isSy) {
  const q = new Queue();
  q.enqueue([sty, stx]);

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  visited[sty][stx] = 1;

  while (q.size) {
    const [y, x] = q.dequeue();

    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];

      if (ny < 0 || nx < 0 || ny >= n || nx >= n) continue;
      if (visited[ny][nx] === 1) continue;
      if (map[ny][nx] === type) {
        visited[ny][nx] = 1;
        q.enqueue([ny, nx]);
      }
      if (isSy) {
        if (
          (type === "R" && map[ny][nx] === "G") ||
          (type === "G" && map[ny][nx] === "R")
        ) {
          visited[ny][nx] = 1;
          q.enqueue([ny, nx]);
        }
      }
    }
  }
}

let orig = 0;
let sy = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] === 0) {
      bfs(i, j, map[i][j], false);
      orig++;
    }
  }
}

visited = Array.from({ length: n }, () => Array(n).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] === 0) {
      bfs(i, j, map[i][j], true);
      sy++;
    }
  }
}

console.log(orig, sy);
