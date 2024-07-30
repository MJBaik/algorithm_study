// 중량제한 (G3, 그래프탐색)
// https://www.acmicpc.net/problem/1939

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

    let current = this.size - 1;

    while (current > 0) {
      const parent = this.getParent(current);

      if (this.heap[current][0] > this.heap[parent][0]) {
        [this.heap[current], this.heap[parent]] = [
          this.heap[parent],
          this.heap[current],
        ];
      } else break;

      current = parent;
    }
  }

  heappop() {
    if (this.size === 0) return undefined;
    const returnValue = this.heap[0];
    this.size--;
    if (this.size === 0) {
      this.heap = [];
    } else {
      this.heap[0] = this.heap.pop();
      let current = 0;

      while (this.getLeft(current) < this.size) {
        const left = this.getLeft(current);
        const right = this.getRight(current);
        const bigger =
          right < this.size && this.heap[right][0] > this.heap[left][0]
            ? right
            : left;

        if (this.heap[current][0] < this.heap[bigger][0]) {
          [this.heap[current], this.heap[bigger]] = [
            this.heap[bigger],
            this.heap[current],
          ];
        } else break;

        current = bigger;
      }
    }
    return returnValue;
  }
}

const [n, m] = input.shift().split(" ").map(Number);
const bridge = Array.from({ length: n }, () => []);
const [st, ed] = input
  .pop()
  .split(" ")
  .map((e) => Number(e) - 1);
const weight = Array(n).fill(0);

input.forEach((ea) => {
  const [a, b, c] = ea.split(" ").map(Number);
  bridge[a - 1].push([c, b - 1]);
  bridge[b - 1].push([c, a - 1]);
});

function dijkstra(idx) {
  const pq = new PriorityQueue();
  pq.heappush([Infinity, idx]);

  while (pq.size > 0) {
    const [cost, now] = pq.heappop();

    if (weight[now] > cost) continue;
    for (let [nc, nd] of bridge[now]) {
      const smaller = Math.min(cost, nc);
      if (weight[nd] < smaller) {
        weight[nd] = smaller;
        pq.heappush([smaller, nd]);
      }
    }
  }
}

dijkstra(st);

console.log(weight[ed]);
