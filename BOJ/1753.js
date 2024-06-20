// 최단경로 (다익스트라)
// https://www.acmicpc.net/problem/1753

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((e) => e.trim());

class Heap {
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

      if (this.heap[parent][0] > this.heap[current][0]) {
        [this.heap[parent], this.heap[current]] = [
          this.heap[current],
          this.heap[parent],
        ];
      } else break;

      current = parent;
    }
  }

  heappop() {
    if (this.size === 0) return undefined;
    const returnValue = this.heap[0];

    if (this.size === 1) {
      this.heap = [];
      this.size--;
      return returnValue;
    }

    this.heap[0] = this.heap.pop();
    this.size--;
    let current = 0;

    while (this.getLeft(current) < this.size) {
      let left = this.getLeft(current);
      let right = this.getRight(current);
      let smaller =
        right < this.size && this.heap[right] < this.heap[left] ? right : left;

      if (this.heap[current][0] > this.heap[smaller][0]) {
        [this.heap[current], this.heap[smaller]] = [
          this.heap[smaller],
          this.heap[current],
        ];
      } else break;

      current = smaller;
    }

    return returnValue;
  }
}

const [v, e] = input.shift().split(" ").map(Number);
const idx = Number(input.shift()) - 1;
let costs = Array(v).fill(Infinity);
const arr = Array.from({ length: v }, () => new Array(0));

for (let i = 0; i < e; i++) {
  const [st, ed, cost] = input[i].split(" ").map(Number);
  arr[st - 1].push([cost, ed - 1]);
}

costs[idx] = 0;

var q = new Heap();
q.heappush([0, idx]);

while (q.size > 0) {
  let [cost, now] = q.heappop();

  if (cost > costs[now]) continue;
  for (let [nc, nd] of arr[now]) {
    nc += cost;
    if (nc < costs[nd]) {
      costs[nd] = nc;
      q.heappush([nc, nd]);
    }
  }
}

costs = costs.map((e) => {
  if (e === Infinity) {
    return "INF";
  } else {
    return e.toString();
  }
});

console.log(costs.join("\n"));
