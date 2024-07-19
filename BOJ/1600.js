// 말이 되고픈 원숭이 (G3, BFS)
// https://www.acmicpc.net/problem/1600

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
    const node = new Node(item);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
    return;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    const ret = this.head.node;
    this.size--;
    this.head = this.head.next;
    if (this.size === 0) {
      this.tail = null;
    }
    return ret;
  }
}

const k = parseInt(input.shift());
const [m, n] = input.shift().split(" ").map(Number);
const board = input.map((e) => e.split(" ").map(Number));

function bfs() {
  const q = new Queue();
  const visited = Array.from({ length: k + 1 }, () =>
    Array.from({ length: n }, () => Array(m).fill(0))
  );

  for (let i = 0; i < k + 1; i++) {
    visited[i][0][0] = 0;
  }

  q.enqueue([0, 0, 0, k]);

  const h_dy = [1, 1, -1, -1, 2, 2, -2, -2];
  const h_dx = [-2, 2, -2, 2, 1, -1, 1, -1];

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  while (q.size > 0) {
    const [y, x, cnt, jump] = q.dequeue();
    if (y === n - 1 && x === m - 1) return cnt;

    if (jump > 0) {
      for (let i = 0; i < 8; i++) {
        const ny = y + h_dy[i];
        const nx = x + h_dx[i];
        if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
        if (board[ny][nx] === 1) continue;
        if (visited[k - (jump - 1)][ny][nx] > 0) continue;
        visited[k - (jump - 1)][ny][nx] = cnt + 1;
        q.enqueue([ny, nx, cnt + 1, jump - 1]);
      }
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if (board[ny][nx] === 1) continue;
      if (visited[k - jump][ny][nx] > 0) continue;
      visited[k - jump][ny][nx] = cnt + 1;
      q.enqueue([ny, nx, cnt + 1, jump]);
    }
  }

  return -1;
}

const ret = bfs();

console.log(ret);
