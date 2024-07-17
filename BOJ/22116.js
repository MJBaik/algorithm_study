// 창영이와 퇴근 (G4, 다익스트라)
// https://www.acmicpc.net/problem/22116

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

class PriorityQueue {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  getParent(idx) {
    return Math.floor((idx - 1) / 2);
  }
  getLeft(idx) {
    return idx * 2 + 1;
  }
  getRight(idx) {
    return idx * 2 + 2;
  }

  heappush(item) {
    this.heap.push(item);
    this.size++;
    let now = this.size - 1;

    while (now > 0) {
      const parent = this.getParent(now);

      if (this.heap[parent][0] > this.heap[now][0]) {
        let temp = this.heap[now];
        this.heap[now] = this.heap[parent];
        this.heap[parent] = temp;
      } else break;
      now = parent;
    }
  }

  heappop() {
    if (this.size === 0) return undefined;
    const ret = this.heap[0];
    this.size--;
    if (this.size === 0) {
      this.heap = [];
    } else {
      this.heap[0] = this.heap.pop();
      let now = 0;

      while (this.getLeft(now) < this.size) {
        let left = this.getLeft(now);
        let right = this.getRight(now);
        let smaller =
          right < this.size && this.heap[right][0] < this.heap[left][0]
            ? right
            : left;

        if (this.heap[now][0] > this.heap[smaller][0]) {
          let temp = this.heap[now];
          this.heap[now] = this.heap[smaller];
          this.heap[smaller] = temp;
        } else break;

        now = smaller;
      }
    }
    return ret;
  }
}

const n = parseInt(input.shift());
const map = input.map((e) => e.split(" ").map(Number));

function dijkstra() {
  const pq = new PriorityQueue();
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
  dist[0][0] = 0;

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];

  pq.heappush([0, 0, 0]);

  while (pq.size > 0) {
    const [cost, y, x] = pq.heappop();

    if (dist[y][x] < cost) continue;

    for (let k = 0; k < 4; k++) {
      const ny = y + dy[k];
      const nx = x + dx[k];

      if (ny < 0 || nx < 0 || ny >= n || nx >= n) continue;

      let nc = Math.max(cost, Math.abs(map[y][x] - map[ny][nx]));

      if (dist[ny][nx] > nc) {
        dist[ny][nx] = nc;
        pq.heappush([nc, ny, nx]);
      }
    }
  }
  return dist[n - 1][n - 1];
}

const ret = dijkstra();

console.log(ret);
