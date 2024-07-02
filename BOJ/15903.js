// 카드 합체 놀이 (S1, 그리디)
// https://www.acmicpc.net/problem/15903

const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

const [n, m] = input.shift().split(" ").map(Number);
const nums = input.shift().split(" ").map(Number);

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
      let parent = this.getParent(current);

      if (this.heap[current] < this.heap[parent]) {
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
        let left = this.getLeft(current);
        let right = this.getRight(current);
        let smaller =
          right < this.size && this.heap[right] < this.heap[left]
            ? right
            : left;

        if (this.heap[current] > this.heap[smaller]) {
          [this.heap[current], this.heap[smaller]] = [
            this.heap[smaller],
            this.heap[current],
          ];
        } else break;

        current = smaller;
      }
    }

    return returnValue;
  }

  getSum() {
    const sum = this.heap.reduce((acc, cur) => BigInt(acc) + BigInt(cur), 0);
    return sum.toString();
  }
}

const pq = new PriorityQueue();

nums.forEach((e) => {
  pq.heappush(e);
});

for (let i = 0; i < m; i++) {
  if (pq.size < 2) break;
  const n1 = pq.heappop();
  const n2 = pq.heappop();

  pq.heappush(n1 + n2);
  pq.heappush(n1 + n2);
}

console.log(pq.getSum());
