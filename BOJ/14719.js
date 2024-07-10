// 빗물 (G5, 구현)
// https://www.acmicpc.net/problem/14719

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
    const ret = this.head.node;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return ret;
  }
}

const [n, m] = input.shift().split(" ").map(Number);
const height = input.shift().split(" ").map(Number);
const arr = Array.from({ length: n }, () => Array(m).fill(0));
let max = [0, -1];

for (let i = 0; i < m; i++) {
  for (let j = 0; j < height[i]; j++) {
    arr[j][i] = 1;
    if (height[i] > max[0]) max = [height[i], i];
  }
}

function fillLeft(sty, stx) {
  const q = new Queue();
  q.push([sty, stx]);
  const dy = [0, -1, -1];
  const dx = [1, 0, 1];
  let cnt = 0;

  while (q.size > 0) {
    const [y, x] = q.popleft();

    for (let k = 0; k < 3; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];
      if (ny < 0 || ny < 0 || ny >= n || nx >= m) continue;
      if (arr[ny][nx] !== 0) continue;
      arr[ny][nx] = 2;
      cnt++;
      q.push([ny, nx]);
    }
  }

  return cnt;
}

function fillRight(sty, stx) {
  const q = new Queue();
  q.push([sty, stx]);
  const dy = [0, -1, -1];
  const dx = [-1, 0, -1];
  let cnt = 0;

  while (q.size > 0) {
    const [y, x] = q.popleft();

    for (let k = 0; k < 3; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];
      if (ny < 0 || ny < 0 || ny >= n || nx >= m) continue;
      if (arr[ny][nx] !== 0) continue;
      arr[ny][nx] = 2;
      cnt++;
      q.push([ny, nx]);
    }
  }

  return cnt;
}

let answer = 0;

height.forEach((h, i) => {
  if (i < max[1]) {
    const ret = fillLeft(h - 1, i);
    answer += ret;
  } else if (i > max[1]) {
    const ret = fillRight(h - 1, i);
    answer += ret;
  }
});

console.log(answer);
