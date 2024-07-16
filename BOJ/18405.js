// 경쟁적 전염(G5, BFS)
// https://www.acmicpc.net/problem/18405

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
    return;
  }

  dequeue() {
    if (this.size === 0) return undefined;
    const ret = this.head.node;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return ret;
  }
}

const [n, m] = input.shift().split(" ").map(Number);
const [s, x, y] = input.pop().split(" ").map(Number);

let arr = input.map((e) => e.split(" ").map(Number));

let temp = [];

for (let i in arr) {
  i = parseInt(i);
  for (let j in arr[i]) {
    j = parseInt(j);
    if (arr[i][j] > 0) {
      temp.push([arr[i][j], i, j, 1]);
    }
  }
}

temp.sort((a, b) => a[0] - b[0]);

function bfs() {
  const q = new Queue();

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  temp.forEach((e) => q.enqueue(e));

  while (q.size > 0) {
    const [num, y, x, cnt] = q.dequeue();
    if (cnt > s) break;

    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];
      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if (arr[ny][nx] !== 0) continue;
      arr[ny][nx] = num;
      q.enqueue([num, ny, nx, cnt + 1]);
    }
  }
}

bfs();

console.log(arr[x - 1][y - 1]);
