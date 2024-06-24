// 싸지방에 간 준하 (G3, 우선순위큐)
// https://www.acmicpc.net/problem/12764

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

      if (this.heap[current][0] < this.heap[parent][0]) {
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
        const smaller =
          right < this.size && this.heap[right][0] < this.heap[left][0]
            ? right
            : left;

        if (this.heap[current][0] > this.heap[smaller][0]) {
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
}

const x = Number(input.shift());

let start = new Heap();
let min_end = new Heap();
let endTime = [];
let cpu = [];

input.forEach((e) => {
  const [st, ed] = e.split(" ").map(Number);
  if (st !== undefined && ed !== undefined) {
    start.heappush([st, ed]);
  }
});

while (start.size > 0) {
  const [st, ed] = start.heappop();

  if (cpu.size === 0) {
    endTime.push([ed]);
    cpu.push(1);
  } else {
    let flag = false;
    for (let k = 0; k < endTime.length; k++) {
      let ea = endTime[k];
      if (ea <= st) {
        cpu[k] += 1;
        endTime[k] = ed;
        flag = true;
        break;
      }
    }

    if (!flag) {
      cpu.push(1);
      endTime.push(ed);
    }
  }
}

console.log(`${cpu.length}\n${cpu.join(" ")}`);
