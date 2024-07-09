// 쉬운 최단거리 (S1, BFS)
// https://www.acmicpc.net/problem/14940

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");

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
    const returnValue = this.head.node;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return returnValue;
  }
}

const [n, m] = input.shift().split(" ").map(Number);
input = input.map((e) => e.trim().split(" "));
const answer = Array.from({ length: n }, () => Array(m).fill(-1));
let sty, stx;
let hasStart = false;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === "2") {
      answer[i][j] = 0;
      sty = i;
      stx = j;
    } else if (input[i][j] === "0") {
      answer[i][j] = 0;
    }
  }
}

const q = new Queue();
q.enqueue([sty, stx, 0]);

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

while (q.size > 0) {
  const [y, x, cnt] = q.dequeue();

  for (let k = 0; k < 4; k++) {
    const ny = y + dy[k];
    const nx = x + dx[k];
    if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
    if (input[ny][nx] === "0") continue;
    if (answer[ny][nx] > -1) continue;
    answer[ny][nx] = cnt + 1;
    q.enqueue([ny, nx, cnt + 1]);
  }
}

console.log(answer.map((e) => e.join(" ")).join("\n"));
