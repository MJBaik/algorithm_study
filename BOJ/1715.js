const { time } = require("console");
const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";

let [N, ...input] = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class Heap {
  constructor() {
    this.heap = [];
  }

  getLength() {
    return this.heap.length;
  }
  getParent(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeft(index) {
    return index * 2 + 1;
  }
  getRight(index) {
    return index * 2 + 2;
  }

  heappush(item) {
    this.heap.push(item);
    let current = this.heap.length - 1;

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
    if (this.heap.length === 0) return undefined;

    const rootNode = this.heap[0];

    if (this.heap.length === 1) {
      this.heap = [];
    } else {
      this.heap[0] = this.heap.pop();
      let current = 0;

      while (this.getLeft(current) < this.heap.length) {
        let left = this.getLeft(current);
        let right = this.getRight(current);
        let smaller =
          right < this.heap.length && this.heap[right] < this.heap[left]
            ? right
            : left;

        if (this.heap[current] >= this.heap[smaller]) {
          [this.heap[current], this.heap[smaller]] = [
            this.heap[smaller],
            this.heap[current],
          ];
        } else break;

        current = smaller;
      }
    }

    return rootNode;
  }
}

const heap = new Heap();

input.forEach((e) => {
  heap.heappush(Number(e));
});

let answer = 0;

while (heap.getLength() > 1) {
  const a = heap.heappop();
  const b = heap.heappop();

  answer += a + b;

  heap.heappush(a + b);
}

console.log(answer);
