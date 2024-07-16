// 최소비용 구하기 (G5, 다익스트라)
// https://www.acmicpc.net/problem/1916

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

const n = parseInt(input[0]);
const m = parseInt(input[1]);
const arr = Array.from({ length: n + 1 }, () => []);
const [from, to] = input[input.length - 1].split(" ").map(Number);
const fee = Array(n + 1).fill(Infinity);

for (let i = 2; i < m + 2; i++) {
  const [st, ed, cost] = input[i].split(" ").map(Number);
  arr[st].push([cost, ed]);
}

function daijkstra(from) {
  const bq = new PriorityQueue();
  bq.heappush([0, from]);
  fee[from] = 0;

  while (bq.size > 0) {
    let [cost, now] = bq.heappop();

    if (fee[now] < cost) continue;
    for (let [nc, nd] of arr[now]) {
      if (fee[nd] > nc + cost) {
        fee[nd] = nc + cost;
        bq.heappush([nc + cost, nd]);
      }
    }
  }
}

daijkstra(from);

console.log(fee[to]);
