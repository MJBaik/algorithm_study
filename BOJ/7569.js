// 토마토 (G5, BFS)
// https://www.acmicpc.net/problem/7569

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
    const newNode = new Node(item);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
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

const [m, n, h] = input.shift().split(" ").map(Number);
const tomato = Array.from({ length: h }, () => []);
const start = [];
var total_cnt = m * n * h;

input.forEach((e, i) => {
  const line = e.split(" ").map(Number);
  const idx = Math.floor(i / n);

  if (line.some((item) => item === 1 || item === -1)) {
    line.forEach((ea, id) => {
      if (ea === 1) {
        start.push([i - idx * n, id, idx]);
        total_cnt--;
      } else if (ea === -1) {
        total_cnt--;
      }
    });
  }

  tomato[idx].push(line);
});

function rotten_tomato(start) {
  const visited = Array.from({ length: h }, () =>
    Array.from({ length: n }, () => Array(m).fill(0))
  );
  const q = new Queue();

  start.forEach((e) => {
    const [y, x, z] = e;
    q.enqueue([y, x, z, 0]);
    visited[z][y][x] = 1;
  });

  const dy = [0, 1, 0, -1, 0, 0];
  const dx = [1, 0, -1, 0, 0, 0];
  const dz = [0, 0, 0, 0, 1, -1];
  let max = 0;

  while (q.size) {
    const [y, x, z, cnt] = q.dequeue();
    max = Math.max(cnt, max);

    for (let k = 0; k < 6; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];
      const nz = z + dz[k];

      if (ny < 0 || nx < 0 || nz < 0 || ny >= n || nx >= m || nz >= h) continue;
      if (visited[nz][ny][nx] === 1) continue;
      if (tomato[nz][ny][nx] === -1) continue;
      visited[nz][ny][nx] = 1;
      q.enqueue([ny, nx, nz, cnt + 1]);
      total_cnt--;
    }
  }

  return total_cnt === 0 ? max : -1;
}

const answer = rotten_tomato(start);

console.log(answer);
