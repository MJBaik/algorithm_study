// 벽 부수고 이동하기 (G3, BFS)
// https://www.acmicpc.net/problem/2206

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
  }

  dequeue() {
    if (this.size === 0) return undefined;
    const ret = this.head.node;
    this.head = this.head.next;
    this.size--;
    return ret;
  }
}

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.map((e) => e.split("").map(Number));

function find() {
  const q = new Queue();
  q.enqueue([0, 0, 1, 0]);

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  const visited = Array.from({ length: 2 }, () =>
    Array.from({ length: n }, () => Array(m).fill(0))
  );
  visited[0][0][0] = 1;

  while (q.size > 0) {
    const [y, x, cnt, crash] = q.dequeue();
    if (y === n - 1 && x === m - 1) return visited[crash][n - 1][m - 1];

    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];

      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if (arr[ny][nx] === 1 && crash === 1) continue;
      if (visited[crash][ny][nx] > 0) continue;

      visited[crash][ny][nx] = cnt + 1;
      if (arr[ny][nx] == 1) {
        q.enqueue([ny, nx, cnt + 1, crash + 1]);
      } else {
        q.enqueue([ny, nx, cnt + 1, crash]);
      }
    }
  }

  return -1;
}

const answer = find();

console.log(answer);
