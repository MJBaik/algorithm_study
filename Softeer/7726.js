// 나무 섭지 (Lv3)
// https://softeer.ai/practice/7726

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

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

const ghost = [];
let stx, sty, edx, edy;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === "G") {
      ghost.push([i, j]);
    } else if (input[i][j] === "N") {
      sty = i;
      stx = j;
    } else if (input[i][j] === "D") {
      edy = i;
      edx = j;
    }
  }
}

const ghostMap = Array.from({ length: n }, () => Array(m).fill(0));

function bfs(arr, isGhost) {
  const q = new Queue();
  const visited = Array.from({ length: n }, () => Array(m).fill(0));

  arr.forEach((e) => q.push([e[0], e[1], 0]));

  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];

  while (q.size > 0) {
    const [y, x, cnt] = q.popleft();

    if (isGhost) {
      ghostMap[y][x] = cnt;
    } else {
      if (y === edy && x === edx) return true;
    }

    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];
      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if (visited[ny][nx] === 1) continue;
      if (!isGhost) {
        if (ghostMap[ny][nx] <= cnt + 1) continue;
        if (input[ny][nx] === "#") continue;
      }
      visited[ny][nx] = 1;
      q.push([ny, nx, cnt + 1]);
    }
  }
  return false;
}

bfs(ghost, true);
const res = bfs([[sty, stx]], false);

if (res) {
  console.log("Yes");
} else {
  console.log("No");
}
