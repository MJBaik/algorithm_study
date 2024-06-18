// 불!
// https://www.acmicpc.net/problem/4179

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }

  popleft() {
    if (!this.head) {
      return undefined;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }
}

const [r, c] = input.shift().split(" ").map(Number);
input = input.map((e) => e.split(""));

var q = new Queue();

function bfs(jy, jx) {
  let visited = Array.from({ length: r }, () => Array(r).fill(0));
  q.push([jy, jx, "J", 0]);

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  visited[jy][jx] = 1;
  let j_count = 1;

  while (q.length > 0) {
    const [y, x, who, cnt] = q.popleft();
    if (j_count === 0) return "IMPOSSIBLE";
    if (who === "J") j_count -= 1;

    if (who === "J" && (y === 0 || x === 0 || y === r - 1 || x === c - 1)) {
      return cnt + 1;
    }

    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];

      if (ny < 0 || nx < 0 || ny >= r || nx >= c) continue;
      if (input[ny][nx] === "#" || input[ny][nx] === "F") continue;
      if (who === "J") {
        if (visited[ny][nx] === 1) {
          continue;
        } else {
          j_count += 1;
        }
      }
      input[ny][nx] = who;
      visited[ny][nx] = 1;
      q.push([ny, nx, who, cnt + 1]);
    }
  }

  return "IMPOSSIBLE";
}

let jy, jx;

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (input[i][j] === "J") {
      jy = i;
      jx = j;
    } else if (input[i][j] === "F") {
      q.push([i, j, "F", 0]);
    }
  }
}

const answer = bfs(jy, jx);

console.log(answer);
