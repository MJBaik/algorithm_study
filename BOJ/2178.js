// 미로 탐색 (S1, BFS)
// https://www.acmicpc.net/problem/2178

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split("").map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(-1));

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
  const q = new Queue();
  q.push([sty, stx, 1]);
  visited[sty][stx] = 1;

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  while (q.size > 0) {
    const [y, x, cnt] = q.popleft();

    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];

      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if (input[ny][nx] === 0) continue;
      if (visited[ny][nx] > -1) continue;
      visited[ny][nx] = cnt + 1;
      q.push([ny, nx, cnt + 1]);
    }
  }
}

bfs(0, 0);

console.log(visited[n - 1][m - 1]);
