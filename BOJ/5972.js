// 택배 배송(G5, 다익스트라)
// https://www.acmicpc.net/problem/5972

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
    if (this.size === 1) return;
    let now = this.size - 1;

    while (now > 0) {
      let parent = this.getParent(now);

      if (this.heap[now][0] < this.heap[parent][0]) {
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
      return ret;
    }
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
    return ret;
  }
}

const [n, m] = input.shift().split(" ").map(Number);
const arr = Array.from({ length: n + 1 }, () => []);
var price = Array(n + 1).fill(Infinity);

input.forEach((ea) => {
  let [a, b, c] = ea.split(" ").map(Number);
  arr[a].push([c, b]);
  arr[b].push([c, a]);
});

function dijkstra() {
  const q = new PriorityQueue();
  q.heappush([0, 1]);

  while (q.size > 0) {
    let [cost, now] = q.heappop();

    for (let [nc, nd] of arr[now]) {
      if (cost + nc >= price[nd]) continue;
      price[nd] = cost + nc;
      q.heappush([cost + nc, nd]);
    }
  }
}

dijkstra();

console.log(price[n]);
